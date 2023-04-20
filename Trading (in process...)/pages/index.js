import TipsList from '../components/trading-tips/TipsList';
import Twitter from 'twitter';
import Sentiment from 'sentiment';

function HomePage(props) {
  return <TipsList tips={props.tips} />;
}

export async function getStaticProps() {
  const client = new Twitter({
    consumer_key: 'YcnsXC6sApxffBwWuZN82XkdJ',
    consumer_secret: 'PnDX61laW03hCkc8SKbTLm2imzwOcfvpTzptF3uOlLccXVRJmy',
    access_token_key: '1458893214153420804-FILxx3aijavBM21Zql7RmF0YDeo0Oq',
    access_token_secret: '9GNJERcCpy2MfNV1BmFIdSpeKZhj1nEa6J7ruydRZLL21'
  });

  const params = {
    q: 'stocks to watch AND bullish',
    count: 1000,
    result_type: 'recent',
    lang: 'en'
  };

  const tweets = await client.get('search/tweets', params);
  const sentiment = new Sentiment();

  let tips = [];

  tweets.statuses.forEach(tweet => {
    const result = sentiment.analyze(tweet.text);

    if (result.score > 0) {
      tips.push({
        id: tweet.id_str,
        company: extractCompanyFromTweet(tweet.text),
        sentiment: 'positive'
      });
    } else if (result.score < 0) {
      tips.push({
        id: tweet.id_str,
        company: extractCompanyFromTweet(tweet.text),
        sentiment: 'negative'
      });
    }
  });

  // Deduplicate tips by company name
  tips = tips.reduce((accumulator, currentTip) => {
    const existingTip = accumulator.find(
      tip => tip.company === currentTip.company
    );
    if (existingTip) {
      // Merge tips with the same company name
      existingTip.sentiment =
        existingTip.sentiment === currentTip.sentiment
          ? existingTip.sentiment
          : 'mixed';
      existingTip.tweetIds.push(currentTip.id);
    } else {
      accumulator.push({
        id: currentTip.id,
        company: currentTip.company,
        sentiment: currentTip.sentiment,
        tweetIds: [currentTip.id]
      });
    }
    return accumulator;
  }, []);

  // Sort tips by sentiment (positive, mixed, negative)
  tips.sort((a, b) => {
    const sentimentMap = {
      positive: 1,
      mixed: 0,
      negative: -1
    };
    return sentimentMap[b.sentiment] - sentimentMap[a.sentiment];
  });

  // Filter out tips with mixed sentiment
  tips = tips.filter(tip => tip.sentiment !== 'mixed');

  // Take the top 10 tips
  tips = tips.slice(0, 10);

  return {
    props: {
      tips,
    },
    revalidate: 60, // revalidate every 1 minute
  };
}

// Extract the company name from a tweet
function extractCompanyFromTweet(tweet) {
  // Use regular expressions to extract the company name
  const companyRegex = /(\$[A-Z]{1,5})|([A-Z]{2,})/g;
  const match = tweet.match(companyRegex);
  if (match) {
    // Return the first match as the company name
    return match[0].replace('$', '');
  } else {
    return null;
  }
}

export default HomePage;
