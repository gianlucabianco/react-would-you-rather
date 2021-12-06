// TODO: this is a mock remove after test
const questions = [
    [
        'go into the past and meet your ancestors',
        'go into the future and meet your great-great grandchildren',
    ],
    [
        'have more time',
        'more money',
    ],
    [
        'have a rewind button',
        'a pause button on your life',
    ],
    [
        'be able to talk with the animals',
        'speak all foreign languages',
    ],
    [
        'win the lottery',
        'live twice as long',
    ],
    [
        'be without internet for a week,',
        'without your phone',
    ],
    [
        'meet George Washington,',
        'the current President',
    ],
    [
        'lose your vision',
        'your hearing',
    ],
    [
        'work more hours per day, but fewer days',
        'work fewer hours per day, but more days',
    ],
    [
        'listen to music from the 70’s',
        'music from today',
    ],
    [
        'become someone else',
        'just stay you',
    ],
    [
        'be Batman',
        'Spiderman',
    ],
    [
        'be stuck on a broken ski lift',
        'in a broken elevator',
    ],
    [
        'go to a movie',
        'to dinner alone',
    ],
    [
        'always say everything on your mind',
        'never speak again',
    ],
    [
        'make a phone call',
        'send a text',
    ],
    [
        'read an awesome book',
        'watch a good movie',
    ],
    [
        'be the most popular person at work',
        'school or the smartest',
    ],
    [
        'put a stop to war',
        'end world hunger',
    ],
    [
        'spend the night in a luxury hotel room',
        'camping surrounded by beautiful scenery',
    ],
    [
        'explore space',
        'the ocean',
    ],
    [
        'go deep sea diving',
        'bungee jumping',
    ],
    [
        'be a kid your whole life',
        'an adult your whole life',
    ],
    [
        'go on a cruise with friends',
        'with your spouse',
    ],
    [
        'lose your keys',
        'your cell phone',
    ],
    [
        'eat a meal of cow tongue',
        'octopus',
    ],
    [
        'have x-ray vision',
        'magnified hearing',
    ],
    [
        'work in a group',
        'work alone',
    ],
    [
        'be stuck on an island alone',
        'with someone who talks incessantly',
    ],
    [
        'be too hot',
        'too cold',
    ],
    [
        'have a cook',
        'a maid',
    ],
    [
        'be the youngest',
        'the oldest sibling',
    ],
    [
        'get rich through hard work',
        'through winning the lottery',
    ],
    [
        'have a 10-hour dinner with a headstrong politician from an opposing party,',
        'attend a 10-hour concert for a music group you detest',
    ],
    [
        'be an Olympic gold medalist',
        'a Nobel Peace Prize winner',
    ],
    [
        'have a desk job',
        'an outdoor job',
    ],
    [
        'live at the top of a tall NYC apartment building',
        'at the top of a mountain',
    ],
    [
        'have Rambo',
        'The Terminator on your side',
    ],
    [
        'be proposed to in private',
        'in front of family and friends',
    ],
    [
        'have to sew all your clothes',
        'grow your own food',
    ],
    [
        'hear the good news',
        'the bad news first',
    ],
    [
        'be your own boss',
        'work for someone else',
    ],
    [
        'have nosy neighbors',
        'noisy neighbors',
    ],
    [
        'be on a survival reality show',
        'dating game show',
    ],
    [
        'be too busy',
        'be bored',
    ],
    [
        'watch the big game at home',
        'live at the stadium.',
    ],
    [
        'spend the day with your favorite athlete',
        'you favorite movie star',
    ],
    [
        'live where it is constantly winter',
        'where it is constantly summer',
    ],
    [
        'travel the US and see the sights in a motorhome',
        'by plane',
    ],
    [
        'be a little late',
        'way too early',
    ],
    [
        'have an unlimited gift certificate to a restaurant',
        'a clothing store',
    ],
    [
        'date someone you met online',
        'go on a blind date',
    ],
    [
        'your kids wear a uniform to school',
        'clothing of their choice',
    ],
    [
        'have many good friends',
        'one very best friend',
    ],
    [
        'live in Antarctica',
        'the Sahara Dessert',
    ],
    [
        'be able to take back anything you say',
        'hear every conversation around you',
    ],
    [
        'be 4’5”',
        '7’7”',
    ],
    [
        'be poor and work at a job you love,',
        'rich and work at a job you hate',
    ],
    [
        'have your flight delayed by 8 hours',
        'lose your luggage',
    ],
    [
        'be in your pajamas',
        'a suit all day',
    ],
    [
        'have your first child when you are 18',
        '40',
    ],
    [
        'be the star player on a losing basketball team',
        'ride the bench on a winning one',
    ],
    [
        'spend the next year exempt from all taxes',
        'have a one-month paid vacation',
    ],
    [
        'have the best house in a bad neighborhood',
        'the worst house in a good neighborhood',
    ],
    [
        'be filthy rich and live 400 years ago',
        'be poor but live today',
    ],
    [
        'be gossiped about',
        'never talked about at all',
    ],
    [
        'end hunger',
        'hatred',
    ],
    [
        'be an unknown major league baseball player',
        'a famous badminton star',
    ],
    [
        'go without TV',
        'junk food the rest of your life',
    ],
    [
        'spend the day at an amusement park',
        'lazing on the beach',
    ],
    [
        'be fluent in all languages',
        'be a master of every musical instrument',
    ],
    [
        'sing a song in front of complete strangers',
        'your closest friends',
    ],
    [
        'own your own boat',
        'your own plane',
    ],
    [
        'meet the president of the United States',
        'a movie star',
    ],
    [
        'spend two weeks stuck in a psychiatric hospital',
        'stuck in an airport',
    ],
    [
        'spend 20 years in prison and be exonerated as innocent',
        'be put away for four years (despite your innocence) and be considered guilty forever',
    ],
    [
        'own a house',
        'rent a residence',
    ],
    [
        'be known as a one-hit wonder for a novel',
        'a song',
    ],
    [
        'take an action-packed European vacation',
        'spend two weeks at the same Caribbean resort',
    ],
    [
        'be a character in an action-packed thriller',
        'a romantic comedy',
    ],
    [
        'be stuck on a train',
        'a bus',
    ],
    [
        'be a part of an arranged marriage',
        'spend your life as a single person',
    ],
    [
        'babysit a crying infant for a day',
        'have an unwanted houseguest for a week',
    ],
    [
        'be locked in an amusement park',
        'a library',
    ],
    [
        'sing like an opera star',
        'cook like a gourmet chef',
    ],
    [
        'have your debt forgiven',
        'have guaranteed good health for a decade',
    ],
    [
        'live the rest of your life as a monk',
        'followed continuously by paparazzi',
    ],
    [
        'be given a lifetime supply of delicious food',
        'books',
    ],
    [
        'be able to breath underwater',
        'fly through the air',
    ],
    [
        'be known for your intelligence',
        'your good looks',
    ],
    [
        'eat pizza',
        'ice cream as the only food for eternity',
    ],
    [
        'mentally',
        'physically never age',
    ],
    [
        'change your eye color',
        'your hair color',
    ],
    [
        'have the details of your financial life',
        'your love life be made public',
    ],
    [
        'spend a year as a cop',
        'a teacher in an inner-city neighborhood',
    ],
    [
        'have a family of 12 children',
        'never be able to have children at all',
    ],
];

export default questions;