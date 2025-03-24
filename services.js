function showServices() {
    var category = document.getElementById("serviceCategory").value;
    var serviceDropdown = document.getElementById("service");
    var serviceSection = document.getElementById("serviceSection");

    console.log("Category selected:", category); // Debugging log

    // Clear previous options
    serviceDropdown.innerHTML = '<option value="" disabled selected>Choose a Service</option>';

    // Define services for each category
    var services = {
        nails: [
            { value: 'frenchNails', text: 'French Nails' },
            { value: 'biab', text: 'BIAB (Builder In A Bottle)' },
            { value: 'nailTips', text: 'Nail Tips' },
            { value: 'manicure', text: 'Manicure' }
        ],
        makeup: [
            { value: 'basicMakeup', text: 'Basic Makeup' },
            { value: 'bridalMakeup', text: 'Bridal Makeup' },
            { value: 'eveningMakeup', text: 'Evening Makeup' },
            { value: 'airbrushMakeup', text: 'Airbrush Makeup' }
        ],
        hair: [
            { value: 'haircut', text: 'Haircut & Styling' },
            { value: 'highlights', text: 'Hair Highlights' },
            { value: 'extensions', text: 'Hair Extensions' },
            { value: 'styling', text: 'Hair Styling' }
        ],
        massage: [
            { value: 'relaxingMassage', text: 'Relaxing Massage' },
            { value: 'deepTissueMassage', text: 'Deep Tissue Massage' },
            { value: 'hotStoneMassage', text: 'Hot Stone Massage' },
            { value: 'sportsMassage', text: 'Sports Massage' }
        ],
        waxing: [
            { value: 'eyebrows', text: 'Eyebrows' },
            { value: 'upperLips', text: 'Upper Lips' },
            { value: 'arms', text: 'Arms' },
            { value: 'legs', text: 'Legs' }
        ],
        spa: [
            { value: 'facial', text: 'Facial' },
            { value: 'bodyScrub', text: 'Body Scrub' },
            { value: 'hydratingTreatment', text: 'Hydrating Treatment' },
            { value: 'aromatherapy', text: 'Aromatherapy' }
        ]
    };

    // Populate the dropdown if a valid category is selected
    if (services[category]) {
        services[category].forEach(function(service) {
            var option = document.createElement("option");
            option.value = service.value;
            option.textContent = service.text;
            serviceDropdown.appendChild(option);
        });

        // Make the dropdown visible
        serviceSection.style.display = "block";
        console.log("Services added successfully.");
    } else {
        serviceSection.style.display = "none";
    }
}
