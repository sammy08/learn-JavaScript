var premier = [
    {team:'Manchester United',wins: 20},
    {team:'Liverpool',wins:18},
    {team:'Arsenal',wins:13},
    {team:'Everton',wins:9}
];
premier.reduce((prevAl,elem) => prevAl + elem.wins, 0);

