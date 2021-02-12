
  //Initiate Language count object
function analyze_repo(repository){
    let languageCount = {}
    repository.forEach(function(repo){
        let lang = repo.language
        if (lang in languageCount){
            languageCount[lang]++
        } else{
            languageCount[lang] = 1
        }
    })
    return languageCount
}