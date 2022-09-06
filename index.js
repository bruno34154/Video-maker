const readline = require('readline-sync');
function start(){
    const content = {}
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    function askAndReturnSearchTerm(){
        return readline.question('digite um termo de pesquisa na Wikipedia: ')
    }
    function askAndReturnPrefix(){
        const prefixes = ['Quem é', 'O que é', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'selecione uma opção')
        const selectedPrefixText = prefixes[selectedPrefixIndex];
        return selectedPrefixText;
    }
   console.log(content)
}
start()