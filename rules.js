/* global jsyaml */


let story;

function startStory(text) {
  story = jsyaml.load(text);

  let title = story.Title;
  let initialScene = story.Start;

  return { title, initialScene };
}

function startScene(sceneName) {
  let imageUrl = story.Scenes[sceneName].ImageUrl;
  let caption = story.Scenes[sceneName].Caption;
  let choices = story.Scenes[sceneName].Choices.map(scene => ({
    text: scene.Text,
    target: scene.Target
  }));

  return { imageUrl, caption, choices };
}

//changes cursor type 

document.getElementById("cur").style.cursor = "pointer";
//pointer is main one 

function myFunction(x) {
  var whichSelected = x.selectedIndex;
  //whatever text is selected change that cursor
  document.body.style.cursor = x.options[whichSelected].text;
}
  
  alert(document.getElementById("cur").style.cursor);
