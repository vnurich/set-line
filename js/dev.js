window.onload = () => {
  // #body.body--test-baseline
  const body = document.getElementById('body');
  const bodyGuidesMod = 'body--test-baseline';

  // #container.test-block.test-block--test-baseline
  const container = document.getElementById('container');
  const containerGuidesMod = 'test-block--test-baseline';

  // buttons
  const bodyGuidesButton = document.getElementById('guides-body');
  const containerGuidesButton = document.getElementById('guides-container');

  // toggle modificator
  const toggleGuides = (block, button, mod, name) => {
    button.addEventListener('click', function () {
      if (block.classList.contains(mod)) {
        button.innerHTML = `&#9783; Show ${name} guides`;
        block.classList.remove(mod);
      } else {
        button.innerHTML = `&#9783; Hide ${name} guides`;
        block.classList.add(mod);
      }
    });
  }

  // init listeners
  toggleGuides(body, bodyGuidesButton, bodyGuidesMod, 'body');
  toggleGuides(container, containerGuidesButton, containerGuidesMod, 'container');

}
