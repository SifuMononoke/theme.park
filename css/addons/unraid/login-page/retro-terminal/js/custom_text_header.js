//Custom Text Header //
// ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>   _____ __    _ __         __           ______         _   __      _ 
  / ___// /_  (_) /______ _/ /_____ _   / ____/___ _   / | / /___ _(_)
  \__ \/ __ \/ / //_/ __ `/ __/ __ `/  / / __/ __ `/  /  |/ / __ `/ / 
 ___/ / / / / / ,&lt; / /_/ / /_/ /_/ /  / /_/ / /_/ /  / /|  / /_/ / /  
/____/_/ /_/_/_/|_|\__,_/\__/\__,_/   \____/\__,_/  /_/ |_/\__,_/_/   
                                                                      </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
