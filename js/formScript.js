let formHasError = true;

const validateForm = formSelector => {
    const formElement = document.querySelector(formSelector);

    const validationOptions = [

        {//validate that is has some value
            attribute: 'required',
            isValid: input => input.value.trim() !== '',
            errorMessage: (input, label) => `${label.textContent} is required`
        },
        {//validate minlength off characters
            attribute: 'minlength',
            isValid: input =>
                input.value && input.value.length >= parseInt(input.minLength, 10),
            errorMessage: (input, label) => `${label.textContent} needs to be atleast ${input.minLength} characters `
        },
        {//validate maxlength off characters
            attribute: 'custommaxlength',
            isValid: input =>
                input.value && input.value.length <= parseInt(input.getAttribute("custommaxlength"), 10),
            errorMessage: (input, label) => `${label.textContent} cannot be more than ${input.getAttribute("custommaxlength")} characters `
        },

        {//validate pattern of RegEx
            attribute: 'pattern',
            isValid: input => {
                const patternRegex = new RegExp(input.pattern);
                return patternRegex.test(input.value);
            },
            errorMessage: (input, label) => `Not a valid ${label.textContent.toLowerCase()}`
        },
        {//validate minlength off phone number
            attribute: 'minlengthPhone',
            isValid: input =>
                input.value && input.value.length >= parseInt(input.getAttribute("minlengthPhone"), 10),
            errorMessage: (input, label) => `${label.textContent} needs to be atleast ${input.getAttribute("minlengthPhone")} numbers `
        }


    ];

    const validateSingleFormGroup = formGroup => {
        const label = formGroup.querySelector('label');
        const input = formGroup.querySelector('input');
        const errorContainer = formGroup.querySelector('.error');

        let formGroupError = false;
        for (const option of validationOptions) {
            if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
                errorContainer.textContent = option.errorMessage(input, label);

                formGroupError = true;
                formHasError = true;

            }
        }

        if (!formGroupError) {
            errorContainer.textContent = "";

        }


    };

    if (formElement) {
        formElement.setAttribute('novalidate', '');



        Array.from(formElement.querySelectorAll('input')).forEach(input => {
            input.addEventListener('blur', event => {
                validateSingleFormGroup(event.target.parentElement);
            });
        });


        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            validateAllFormGroups(formElement);

            let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));


            if (!formHasError) {
                window.open('confirmorder.html', '_self');
            }
        });

        const validateAllFormGroups = formToValidate => {

            formHasError = false; // Reset to having no errors before we start re-validate on every field
            Array.from(formToValidate.querySelectorAll('.formGroup')).forEach(field => {
                validateSingleFormGroup(field);
            });
        };
    };
    //END OF VALIDATEFORM FUNCTION
}

validateForm('#cartForm');
