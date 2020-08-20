const newQuiz = initCompPage('Demo_1');
newQuiz.elemShortAnswer({
    name: 'short_1',
    YourQue: 'Does this spark joy?',
    length: 50
});

newQuiz.elemMultChoice({
    name: 'mul_choice_1',
    YourQue: 'Choose reasons for the sparks of joy',
    choices: ['Option_1', 'Option_2', 'Option_3', 'Option_4']
});

newQuiz.elemMultChoice({
    name: 'rad_choice_1',
    YourQue: 'Choose one reason for the sparks of joy',
    choices: ['Option_1', 'Option_2', 'Option_3', 'Option_4'],
    subtype: 'radio'
});

newQuiz.elemDropDown({
    name: 'drop_down_1',
    YourQue: 'Which one sparks the joy',
    choices: ['Option_1', 'Option_2', 'Option_3', 'Option_4']
});

newQuiz.elemImageChooser({
    name: 'img_choice_1',
    YourQue: 'Choose the image that best describes your mood',
    choices: ['./imgs/1.png', './imgs/2.png', './imgs/3.png', './imgs/4.png']
});

var MixedInputJSON = {
    name: "classEvaluation",
    YourQue: "Fill out Below class Eval",
    VariousInputs: [{
            type: TextInput,
            name: 'short_2',
            YourQue: 'describe your experience',
            length: 50,
        },
        {
            type: MultChoice,
            name: 'check_2',
            // YourQue: 'select whichever applies',
            YourQue: 'select whichever applies',
            choices: ['5', 'Option_2', 'Option_3', 'Option_4'],
        },
        {
            subtype: 'radio',
            type: MultChoice,
            name: 'radio_2',
            YourQue: 'select one of the following',
            choices: ['Option_1', 'Option_2', 'Option_3', 'Option_4'],
        }
    ],
};

newQuiz.elemMixedInput(MixedInputJSON);
// newQuiz.elemgetDataButton({ text: 'Finish', CompForm: newQuiz })
newQuiz.createCompPage('Demo_1');


function CompleteQuiz(inputJSON) {
    var DisplayData = document.getElementById("output");
    const output_JSON_container = document.createElement('pre');
    output_JSON_container.appendChild(document.createElement('code'));
    const JsonOut = document.createTextNode(JSON.stringify(inputJSON, null, 1));
    output_JSON_container.appendChild(JsonOut);
    output_JSON_container.name = this.name;
    output_JSON_container.className = 'output-JSON';
    DisplayData.appendChild(output_JSON_container);
}


// const handlePageComplete = event => {
//     event.preventDefault();
//     console.log(newQuiz.CompElements)
//     const data = returnJSON(newQuiz.CompElements);

//     // Demo only: print the form data onscreen as a formatted JSON object.
//     const dataContainer = document.getElementsByClassName('results__display')[0];
//     // Use `JSON.stringify()` to make the output valid, human-readable JSON.
//     dataContainer.textContent = JSON.stringify(data, null, "  ");
//     // ...this is where we’d actually do something with the form data...

//     console.log(data)
// };