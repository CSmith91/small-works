# small-works
A collection of scripts that demonstrate specific skills

## Contents
<ol>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#projects">Projects</a></li>
  <ol>
    <li><a href="#periodic-table">Periodic Table</a></li>
    <li><a href="#book-catalogue">Book Catalogue</a></li>
  </ol>
 </ol>
  
## Usage
Download the set of files you would like to view and then load them up by referring to the HTML file, which will in turn make use of the related CSS and JS files associated with it.

## Projects
You can see the various small works done below.
  
### Periodic Table
These files are a demonstration of dynamic CSS using media queries. We look specifically at the size of the screen as the determining factor for what version of the periodic table will be shown.
![image](https://user-images.githubusercontent.com/10632213/221675343-b4f70856-30cd-47b4-8b99-3e8456a129a8.png)

We see on a smaller screen, the long names of the elements are removed:

![image](https://user-images.githubusercontent.com/10632213/221675489-745685a4-b4b9-4a8b-a3ad-4f9b65f92300.png)

Smaller still at we are given a png of the table instead:

![image](https://user-images.githubusercontent.com/10632213/221676529-595c8a90-b6cb-4e27-91b9-c9911e827e16.png)

And then there's a little easter egg for the tiniest of screen sizes :)

![image](https://user-images.githubusercontent.com/10632213/221676733-86a138b0-9515-4fe9-b3fd-83f18a80737c.png)


#### To improve:
The periodic table's last two rows require the user to scroll down in some instances at its maximum size. It would be better if the entire table was visible based on the screen size. I would like to add more colours to the mono-coloured grid.

### Book Catalogue
These files feature JSON and how information is parsed and stringified. This allows us to save session information, such that the user and refresh or otherwise navigate through a site without losing track of the informtation they have added.

![image](https://user-images.githubusercontent.com/10632213/221671949-ff87e377-1f28-495b-ba0a-49d72073b9a8.png)

Another skill demonstated here is DOM manipulation. The user can add a book and a row of the table is created. The user can then click on each element within the table to amend any books they add.

![image](https://user-images.githubusercontent.com/10632213/221672047-9091668e-abae-4f75-bd70-5f92f997b26d.png)

![image](https://user-images.githubusercontent.com/10632213/221672145-128bae01-7b8f-4194-b14c-ed82ab01f984.png)
#### To improve:
Some CSS can be added. Additionally coding the genre tab to include more genres, and when the user selects to edit a genre, ensure they keep within the pre-defined list. Presently a user can edit a genre to be any value.
