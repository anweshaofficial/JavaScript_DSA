//Desiging a file system using a tree 

class FileSystemNode{

    constructor(name, isFolder = false){

        this.name = name;
        this.isFolder = isFolder;
        this.children = [];
    }

    addFile(fileName) {
    if (this.isFolder){
        this.children.push(new FileSystemNode(fileName));

    } else {
        throw new Error("Cannot add file to directory")
    }

    }

    addFolder(folderName){
        if (this.isFolder){
            this.children.push(new FileSystemNode(folderName, true));
        } else {
            throw new Error("Cannot add folder to file")
        }
    }

    listContents(){
        return this.children.map (child => child.name).join("\n");
    }

}

//Test Cases 

const root = new FileSystemNode("Root", true);
root.addFolder("Folder 1");
root.addFile("File 1");

console.log(root.listContents());

console.log(root.listContents()); // Should list 'Documents', 'Photos', 'readme.txt'

try {
    root.addFile("newFile.txt"); // Should succeed
    console.log(root.listContents()); // Should include 'newFile.txt'
} catch (error) {
    console.error(error);
}