var createPolitician = function(name)
{

var politician = {};

politician.name = name;

politician.electionResults = null;

politician.totalVotes = 0;

return politician;
};

var jane = createPolitician("Jane Doesitall");
var betsy = createPolitician("Betsy Rocks");
