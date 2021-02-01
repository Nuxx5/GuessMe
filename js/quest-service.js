var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    var quests = loadFromStorage('Quests');
    gQuestsTree = quests;
    if (!gQuestsTree || !gQuestsTree.length) { 
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res]
    
}

function addGuess(newQuestTxt, newGuessTxt, res) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest;
    gPrevQuest[res] = newQuest;
    _saveTreeToStorage();
}

function getCurrQuest(){
    return gCurrQuest;
}

function _saveTreeToStorage() {
    saveToStorage('Quests', gQuestsTree);
}

