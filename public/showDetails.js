document.addEventListener('DOMContentLoaded', function() {
    const characterId = new URL(window.location.href).searchParams.get("id");
    if (characterId) {
        fetch(`data/${characterId}.json`)
            .then(response => response.json())
            .then(data => {
                // 假设整个角色数据都在一级键下，这里我们使用 `data[characterId]` 来访问它
                const character = data[characterId];
                document.getElementById('name').textContent = `Name: ${character.name}`;
                document.getElementById('description').textContent = `Description: ${character.description}`;
                document.getElementById('itemUsage').textContent = `Item Usage: ${character.itemUsage}`;
                document.getElementById('itemDesc').textContent = `Item Description: ${character.itemDesc}`;
                document.getElementById('itemObtainApproach').textContent = `Item Obtain Approach: ${character.itemObtainApproach}`;
                document.getElementById('rarity').textContent = `Rarity: ${character.rarity}`;
                document.getElementById('profession').textContent = `Profession: ${character.profession}`;
                document.getElementById('subProfessionId').textContent = `Sub Profession ID: ${character.subProfessionId}`;
                document.getElementById('position').textContent = `Position: ${character.position}`;
                document.getElementById('maxLevel').textContent = `Max Level: ${character.phases[0].maxLevel}`;
            })
            .catch(error => console.error('Error fetching character data:', error));
    }
});
