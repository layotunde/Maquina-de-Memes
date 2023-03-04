
async function mapImageList(){
    const memesObject = [
       {
        "name": "giancarlo meme"
        'path' : "pictures/giancarlo meme.jpg"
       }
       {
        "name": "nazare"
        "path": "pictures/nazare.webp"
       }
       {
        "name": "logo-meme"
        'path': "pictures/logo-meme.png"
       }
    ]

    return memesObject
}

async function CreateGallery(imageList){
const memeSelector = document.querySelector("#memes-list")

imageList.forEach(picture => {
    let newOption = document.createElement("option")
    newOption.text = picture.name.toUpperCase()
    newOption.value = picture.path
    memeSelector.appendChild(newOption)
});

}

async function main(){
    const memesImageList = mapImageList
    CreateGallery(memesImageList)
}

main()