'use strict';

window.onload = function () {
  // #body.body--test-baseline
  var body = document.getElementById('body');
  var bodyGuidesMod = 'body--test-baseline';

  // #container.test-block.test-block--test-baseline
  var container = document.getElementById('container');
  var containerGuidesMod = 'test-block--test-baseline';

  // buttons
  var bodyGuidesButton = document.getElementById('guides-body');
  var containerGuidesButton = document.getElementById('guides-container');

  // toggle modificator
  var toggleGuides = function toggleGuides(block, button, mod, name) {
    button.addEventListener('click', function () {
      if (block.classList.contains(mod)) {
        button.innerHTML = '&#9783; Show ' + name + ' guides';
        block.classList.remove(mod);
      } else {
        button.innerHTML = '&#9783; Hide ' + name + ' guides';
        block.classList.add(mod);
      }
    });
  };

  // init listeners
  toggleGuides(body, bodyGuidesButton, bodyGuidesMod, 'body');
  toggleGuides(container, containerGuidesButton, containerGuidesMod, 'container');
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHlHdWlkZXNNb2QiLCJjb250YWluZXIiLCJjb250YWluZXJHdWlkZXNNb2QiLCJib2R5R3VpZGVzQnV0dG9uIiwiY29udGFpbmVyR3VpZGVzQnV0dG9uIiwidG9nZ2xlR3VpZGVzIiwiYmxvY2siLCJidXR0b24iLCJtb2QiLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDcEI7QUFDQSxNQUFNQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxNQUFNQyxnQkFBZ0IscUJBQXRCOztBQUVBO0FBQ0EsTUFBTUMsWUFBWUgsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFsQjtBQUNBLE1BQU1HLHFCQUFxQiwyQkFBM0I7O0FBRUE7QUFDQSxNQUFNQyxtQkFBbUJMLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBekI7QUFDQSxNQUFNSyx3QkFBd0JOLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQTlCOztBQUVBO0FBQ0EsTUFBTU0sZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsR0FBaEIsRUFBcUJDLElBQXJCLEVBQThCO0FBQ2pERixXQUFPRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQzNDLFVBQUlKLE1BQU1LLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCSixHQUF6QixDQUFKLEVBQW1DO0FBQ2pDRCxlQUFPTSxTQUFQLHFCQUFtQ0osSUFBbkM7QUFDQUgsY0FBTUssU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJOLEdBQXZCO0FBQ0QsT0FIRCxNQUdPO0FBQ0xELGVBQU9NLFNBQVAscUJBQW1DSixJQUFuQztBQUNBSCxjQUFNSyxTQUFOLENBQWdCSSxHQUFoQixDQUFvQlAsR0FBcEI7QUFDRDtBQUNGLEtBUkQ7QUFTRCxHQVZEOztBQVlBO0FBQ0FILGVBQWFSLElBQWIsRUFBbUJNLGdCQUFuQixFQUFxQ0gsYUFBckMsRUFBb0QsTUFBcEQ7QUFDQUssZUFBYUosU0FBYixFQUF3QkcscUJBQXhCLEVBQStDRixrQkFBL0MsRUFBbUUsV0FBbkU7QUFFRCxDQTlCRCIsImZpbGUiOiJkZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAvLyAjYm9keS5ib2R5LS10ZXN0LWJhc2VsaW5lXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuICBjb25zdCBib2R5R3VpZGVzTW9kID0gJ2JvZHktLXRlc3QtYmFzZWxpbmUnO1xuXG4gIC8vICNjb250YWluZXIudGVzdC1ibG9jay50ZXN0LWJsb2NrLS10ZXN0LWJhc2VsaW5lXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgY29uc3QgY29udGFpbmVyR3VpZGVzTW9kID0gJ3Rlc3QtYmxvY2stLXRlc3QtYmFzZWxpbmUnO1xuXG4gIC8vIGJ1dHRvbnNcbiAgY29uc3QgYm9keUd1aWRlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlkZXMtYm9keScpO1xuICBjb25zdCBjb250YWluZXJHdWlkZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpZGVzLWNvbnRhaW5lcicpO1xuXG4gIC8vIHRvZ2dsZSBtb2RpZmljYXRvclxuICBjb25zdCB0b2dnbGVHdWlkZXMgPSAoYmxvY2ssIGJ1dHRvbiwgbW9kLCBuYW1lKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhtb2QpKSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgJiM5NzgzOyBTaG93ICR7bmFtZX0gZ3VpZGVzYDtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZShtb2QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGAmIzk3ODM7IEhpZGUgJHtuYW1lfSBndWlkZXNgO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKG1vZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBpbml0IGxpc3RlbmVyc1xuICB0b2dnbGVHdWlkZXMoYm9keSwgYm9keUd1aWRlc0J1dHRvbiwgYm9keUd1aWRlc01vZCwgJ2JvZHknKTtcbiAgdG9nZ2xlR3VpZGVzKGNvbnRhaW5lciwgY29udGFpbmVyR3VpZGVzQnV0dG9uLCBjb250YWluZXJHdWlkZXNNb2QsICdjb250YWluZXInKTtcblxufVxuIl19
