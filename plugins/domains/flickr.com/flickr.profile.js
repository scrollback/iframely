module.exports = {

    re: /^https?:\/\/www\.flickr\.com\/photos\/([@a-zA-Z0-9_\.-]+)\/?([?#].*)?$/,

    mixins: [
        "og-image",
        "favicon",
        "canonical",
        "twitter-description",
        "og-site",
        "og-title"
    ],

    getLink: function(urlMatch, twitter) {

        if (twitter['image0']) {
            var m = twitter['image0'].match(/\/(\d+)_\w+_z\.jpg$/i);

            return {
                href: 'https://www.flickr.com/photos/' + urlMatch[1] + '/' + m[1] + '/player',
                rel: [CONFIG.R.image, CONFIG.R.player, CONFIG.R.html5],
                type: CONFIG.T.text_html,
                "aspect-ratio": 4/3
            };
        }
    },

    tests: [{
        noFeeds: true
    },
        "https://www.flickr.com/photos/astridyskout/",
        "https://www.flickr.com/photos/sciandra"
    ]
};