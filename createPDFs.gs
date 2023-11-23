function insertParticipantID(id) {
  // Define the target text to search for
  var targetText = "Participant ID: "+(id-1);

  // Get the active document
  var document = DocumentApp.getActiveDocument();

  // Get the body of the document
  var body = document.getBody();

  // Get the current participant ID (you can replace this with your logic to generate the ID)
  var participantID = id

  // Replace the target text with "Participant ID: " followed by the participant ID
  body.replaceText(targetText, "Participant ID: " + participantID);

  document.saveAndClose();

}


function replace(SearchText, ReplaceText){
    // Define the target text to search for
  var targetText = SearchText;

  // Get the active document
  var document = DocumentApp.getActiveDocument();

  // Get the body of the document
  var body = document.getBody();


  // Replace the target text with "Participant ID: " followed by the participant ID
  body.replaceText(targetText, ReplaceText);
  document.saveAndClose();
}

function randomlyGenerateOrder(){
  var randomFloat = Math.random();
  var ranInt = Math.round(randomFloat);
  if(ranInt == 1){
      var targetText = "First Dashboard: ";

      // Get the active document
      var document = DocumentApp.getActiveDocument();

      // Get the body of the document
      var body = document.getBody();

      // Get the current participant ID (you can replace this with your logic to generate the ID)

      // Replace the target text with "Participant ID: " followed by the participant ID
      body.replaceText(targetText, "First Dashboard: Moon");


      var targetText = "Second Dashboard: ";

      // Get the active document
      var document = DocumentApp.getActiveDocument();

      // Get the body of the document
      var body = document.getBody();

      // Get the current participant ID (you can replace this with your logic to generate the ID)


      // Replace the target text with "Participant ID: " followed by the participant ID
      body.replaceText(targetText, "Second Dashboard: Sun");
      document.saveAndClose();
  }else{
      var targetText = "First Dashboard: ";

      // Get the active document
      var document = DocumentApp.getActiveDocument();

      // Get the body of the document
      var body = document.getBody();

      // Get the current participant ID (you can replace this with your logic to generate the ID)

      // Replace the target text with "Participant ID: " followed by the participant ID
      body.replaceText(targetText, "First Dashboard: Sun");


      var targetText = "Second Dashboard: ";

      // Get the active document
      var document = DocumentApp.getActiveDocument();

      // Get the body of the document
      var body = document.getBody();

      // Get the current participant ID (you can replace this with your logic to generate the ID)


      // Replace the target text with "Participant ID: " followed by the participant ID
      body.replaceText(targetText, "Second Dashboard: Moon");
      document.saveAndClose();
  }
}

function deleteOrder(){
  // delete all 4 possible combinations
  replace("First Dashboard: Sun","First Dashboard: ") 
  replace("First Dashboard: Moon","First Dashboard: ")
  replace("Second Dashboard: Sun","Second Dashboard: ") 
  replace("Second Dashboard: Moon","Second Dashboard: ")

}

function exportToPDF(filenumber) {
  // Get the active document
  var document = DocumentApp.getActiveDocument();

  // Generate a file name for the PDF (you can customize this)
  var pdfName = "Study_Document_"+filenumber+".pdf";

  // Create a blob containing the PDF data
  var pdfBlob = document.getAs('application/pdf');

  // Get the folder where you want to save the PDF (replace 'FolderName' with your folder's name)
  var folder = DriveApp.getFoldersByName('HCI-Study').next();

  // Create a file in the specified folder
  var pdfFile = folder.createFile(pdfBlob);

  // Rename the file
  pdfFile.setName(pdfName);

  // Log the URL of the exported PDF
  Logger.log("PDF exported to: " + pdfFile.getUrl());
}


function main(){
  randomlyGenerateOrder();
  exportToPDF(0);
  deleteOrder();

  for(var i = 1; i <= 20; i++){
    insertParticipantID(i);
    randomlyGenerateOrder();
    exportToPDF(i)
    deleteOrder();
  }
  
}