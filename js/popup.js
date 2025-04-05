// Function to update and show the popup
document.querySelectorAll('.clickable-box').forEach(box => {
    const title = box.getAttribute('data-title');
    const description = box.getAttribute('data-description');
    const imageSrc = box.getAttribute('data-image');
    const popupId = box.getAttribute('data-popup');

    // When a box is clicked
    box.onclick = function () {
        const popup = document.getElementById(popupId);

        // Set unique content for each popup
        const popupTitle = popup.querySelector('h3');
        const popupDescription = popup.querySelector('p');
        const popupImage = popup.querySelector('.popup-image');

        // Assign the title and description for the popup
        if (popupId === 'popup1') {
            popupTitle.textContent = 'Popup Title 1';
            popupDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus quam in luctus convallis. Donec rutrum sagittis tellus, in feugiat libero. Praesent quis rutrum ligula, id cursus dui. Donec suscipit magna eget est scelerisque gravida. Duis volutpat dolor at urna dictum, in scelerisque sem feugiat. Proin ornare orci id velit feugiat molestie. Nullam egestas orci non metus bibendum fermentum eu ut nunc. Aenean dictum malesuada purus at volutpat. Suspendisse blandit in sem vitae aliquam. Proin nec accumsan velit, nec placerat felis. Maecenas ac sollicitudin arcu, a lacinia risus. Aenean efficitur non lacus et hendrerit. Morbi sagittis ipsum sit amet feugiat lacinia. Praesent quis eros ante. Donec aliquet eget felis vel condimentum. Pellentesque eleifend odio risus, ac bibendum sapien gravida ac. Duis pellentesque eu odio sed sollicitudin. Nunc posuere pharetra tortor, feugiat porttitor magna rhoncus nec. Integer quis enim nisl. In eget nibh a mauris congue tempor. Suspendisse vel eros in felis iaculis molestie. Morbi nec vestibulum enim, vitae eleifend ante. Aenean nisl sapien, egestas vitae turpis quis, congue ultricies turpis. Morbi non turpis id turpis pellentesque egestas eu quis eros. Etiam vulputate velit eros. Pellentesque finibus pellentesque congue. Quisque at commodo mi. Nullam porttitor vel sapien in pretium. Proin tincidunt scelerisque diam at pulvinar. Quisque vel consectetur turpis, ac placerat tortor. Etiam sollicitudin dui in magna tempus ullamcorper. Donec orci tortor, malesuada vel ultrices ut, pulvinar at dolor. Quisque ac sagittis libero. Donec convallis tortor purus, vel pretium nisl dignissim sed. Etiam id imperdiet justo. Phasellus pretium eleifend lectus sit amet lobortis. Curabitur pretium lorem sapien. Nullam finibus risus sit amet magna bibendum, at ullamcorper metus mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Pellentesque nec dapibus mauris. Vivamus rutrum eget tortor ac tempor. Nam ullamcorper tempor tempus. Pellentesque vel varius risus. Pellentesque pulvinar dui nec enim consectetur, id finibus diam tristique. Nam volutpat finibus risus, ac facilisis enim porttitor sodales. Quisque tempor vel turpis et mattis. Sed at velit urna. Proin ante nibh, iaculis ac consequat dictum, scelerisque a quam. Nam vel turpis vel urna iaculis ultrices. Mauris vehicula sodales erat, quis congue tortor sagittis eu.';
        } else if (popupId === 'popup2') {
            popupTitle.textContent = 'Popup Title 2';
            popupDescription.textContent = 'This is a different description text for the second box\'s popup.';
        } else if (popupId === 'popup3') {
            popupTitle.textContent = 'Popup Title 3';
            popupDescription.textContent = 'This is a different description text for the third box\'s popup.';
        } else if (popupId === 'popup4') {
            popupTitle.textContent = 'Popup Title 4';
            popupDescription.textContent = 'This is a different description text for the fourth box\'s popup.';
        }

        popupImage.src = `../img/${imageSrc}`; // Update image for the popup
        popup.style.display = 'flex';  // Show the popup
    };
});

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup when clicked outside
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup(popup.id);
        }
    });
});

// Close the popup when the close button is clicked
document.query
