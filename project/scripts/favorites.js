function renderFavorites() {
  const memberCardsFavContainer = document.querySelector('#pet-cards-fav');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  memberCardsFavContainer.innerHTML = '';

  if (favorites.length === 0) {
    memberCardsFavContainer.style.display = 'flex';
    memberCardsFavContainer.style.justifyContent = 'center';
    memberCardsFavContainer.style.alignItems = 'center';
    memberCardsFavContainer.style.height = '60vh';

    // Reminder: added the "else" statement to fix empty message issues
    const emptyMessage = document.createElement('p');
    emptyMessage.classList.add('emptymessagecss');
    emptyMessage.textContent = 'Your favorites list is empty. Add some pets to your favorites!';
    memberCardsFavContainer.appendChild(emptyMessage);
  } else {
    memberCardsFavContainer.style.display = 'grid';
    memberCardsFavContainer.style.justifyContent = 'space-between';
    memberCardsFavContainer.style.height = 'auto';

    favorites.forEach(member => {
      const memberFavCard = document.createElement('section');
      memberFavCard.classList.add('pet-card');

      const star = document.createElement('span');
      star.classList.add('favorite-star');
      star.textContent = '★';
      star.style.color = 'yellow';
      star.addEventListener('click', () => toggleFavorite(member, star));

      const memberImage = document.createElement('img');
      memberImage.src = member.logopath;
      memberImage.alt = member.name;

      const memberName = document.createElement('h4');
      memberName.textContent = member.name;

      const memberInfo = document.createElement('p');
      memberInfo.textContent = member.address;

      const phone = document.createElement('p');
      phone.textContent = member.phone;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove from Favorites';
      removeButton.classList.add('removefavoritebutton');

      removeButton.addEventListener('click', () => removeFavorite(member, memberFavCard));

      memberFavCard.appendChild(star);
      memberFavCard.appendChild(memberName);
      memberFavCard.appendChild(memberImage);
      memberFavCard.appendChild(memberInfo);
      memberFavCard.appendChild(phone);
      memberFavCard.appendChild(removeButton);

      memberCardsFavContainer.appendChild(memberFavCard);
    });
  }
}


function removeFavorite(pet, cardElement) {
  const petCardsFavContainer = document.querySelector('#pet-cards-fav');

  cardElement.remove();

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(favPet => favPet.name !== pet.name);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  if (favorites.length === 0) {
    petCardsFavContainer.style.display = 'flex';
    petCardsFavContainer.style.justifyContent = 'center';
    petCardsFavContainer.style.alignItems = 'center';
    petCardsFavContainer.style.height = '60vh';

    const emptyMessage = document.createElement('p');
    emptyMessage.classList.add('emptymessagecss');
    emptyMessage.textContent = 'Your favorites list is empty. Add some pets to your favorites!';
    petCardsFavContainer.appendChild(emptyMessage);
  }
}