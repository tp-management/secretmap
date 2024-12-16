const CardsData = [
    {
        no: 1,
        level: "beginner",
        caption: (
            <p>
                Welcome to the Start of Your Journey!
            </p>
        ),
        earnings: null,
        rules: [
            {status: true, rule: "Join our club"},
            {status: false, rule: "Learn how everything works"},
            // {status: false, rule: "Share one unique place"},
            // {status: false, rule: "Create interesting tasks for visitors"},
        ]
    },
    {
        no: 2,
        level: "advanced",
        caption: (
            <p>
                Earn from <span>0.5$</span> to <span>2$</span> for every location view
            </p>
        ),
        earnings: "0.5$ - 2$",
        rules: [
            {status: false, rule: "2 shared places"},
            {status: false, rule: "3 visitors for each place you shared"},
            {status: false, rule: "1 friend invited to join TripWhoop club"},
        ]
    },
    {
        no: 3,
        level: "expert",
        caption: (
            <p>
                Earn from <span>2$</span> to <span>5$</span> for every location view
            </p>
        ),
        earnings: "2$ - 5$",
        rules: [
            {status: false, rule: "5 shared places"},
            {status: false, rule: "13 visitors for each place you shared"},
            {status: false, rule: "6 friend invited to join TripWhoop club"},
            {status: false, rule: "Got 1 sponsore for one of your place awards"}
        ]
    },
    {
        no: 4,
        level: "master",
        caption: (
            <p>
                Earn more than <span>5$</span> for every location view
            </p>
        ),
        earnings: "5$ and more",
        rules: [
            {status: false, rule: "15 shared places"},
            {status: false, rule: "40 visitors for each place you shared"},
            {status: false, rule: "Your game reward is at least 100$"},
            {status: false, rule: "12 friend invited to join TripWhoop club"},
        ]
    },
    
];

export {CardsData};