function findMatching(drivers, guy){
    return drivers.filter(index => index.toLowerCase() == guy.toLowerCase());
}

function fuzzyMatch(drivers, guy){
    return drivers.filter(index => index.substring(0, guy.length) == guy)
}

function matchName(drivers, guy){
    return drivers.filter(index => index.name == guy)
}