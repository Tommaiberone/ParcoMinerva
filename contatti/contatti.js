
// Initialize and add the Google Map
function initMap() {
    // The location of Sapienza
    const sapienza = { lat: 41.903705747404736, lng: 12.514115084657702};
    // The map, centered at Sapienza
    const map = new google.maps.Map(document.getElementById("Gmap"), {
      zoom: 12,
      center: sapienza,
    });
    // The marker, positioned at Sapienza
    const marker = new google.maps.Marker({
      position: sapienza,
      map: map,
    });
}