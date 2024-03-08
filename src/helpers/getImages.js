export const getImages = async() => {
    const url = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`;
    const response = await fetch(url);
    const { entries } = await response.json(); 

    return entries.map(images => ({
        // id: images.fields.image.uuid,
        title: images.fields.image.title,
        url: images.fields.image.url,
        state: 0,
    }));
}