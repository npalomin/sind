---
Date: Jul-2019
Title: |
  Southwark Industrial Audit (SIA) spatial survey methodology
authors: Nicolas Palominos
output: pdf_document
---

<img src="https://npalomin.github.io/sind/timg/logos.png" width="300">

---

### __Southwark Industrial Audit (SIA)__
# __Spatial survey methodology__ 

---

[__PART 1.__ The paper map, the spatial "functional unit" and QGIS](https://github.com/npalomin/sind/blob/master/training.md#part-1-the-paper-map-the-spatial-functional-unit-and-qgis)

[__PART 2.__ Updating spatial data in the maps in QGIS](https://github.com/npalomin/sind/blob/master/training.md#part-2-updating-spatial-data-in-the-maps-in-qgis)

[__PART 3.__ Special cases](https://github.com/npalomin/sind/blob/master/training.md#part-3--special-cases)

[__PART 4.__ Frequently asked questions](https://github.com/npalomin/sind/blob/master/training.md#part-4-frequently-asked-questions-faq)

[__PART 5.__ Data validation and corrections](https://github.com/npalomin/sind/blob/master/training.md#part-5-data-validation-and-corrections)

---

# PART 1. The paper map, the spatial "functional unit" and QGIS

## Context
This document covers the steps to conduct a field survey of industrial "Functional Units" in Southwark.
The focus is on __collecting information about the physical characteristics__ of the "Building" and "Parcel" where industrial activities take place.

## Key definitions
> _Building_. Permanent roofed construction, usually with walls (OS Mastermap Topography Layer).

> _Parcel_. Shapes that show the position and indicative extent of ownership for each registered property at ground level.

> _Functional Unit_. The premises where a uniform industrial activity takes place, 
disregarding the type of tenure or physical structure of the space that accommodates the activity.

> _Exterior_. A demarcated private land that contains one or more functional units.

## Basemap
The basemap to conduct the survey is composed originally of two polygon layers: "Building" and "Parcel" which we conceptualize as "Functional Unit" and "Exterior" respectively. Polygons are closed shapes from which certain geometric properties can be derived (e.g. area, perimenter). There are more than 1000 "Functional Units" polygons on the basemap of the survey area each of which have a unique identifier, the __Functional Unit Code(FUC)__. Similarly, "Exterior" units polygons have a unique identifier, however these are less polygons because they can have a one-to-many realtionship with the "Functional Units" (i.e. multi-units industrial estates).

<img src="https://npalomin.github.io/sind/timg/bmap.png" width="700">

## Functional Unit Profile
To conduct the SIA survey we will use a Gographic Information System (GIS) database approach. Essentially, this means that the data we will collect is organised in such a way that each of the "Functional Units" polygons (spatial data) has a set of associated attributes (e.g. the answers to the survey's questions) structured as a table. In the table each row corresponds to one polygon (with unique identifier) and each column corresponds to an attribute of the polygon. 

<img src="https://npalomin.github.io/sind/timg/pol_tab.png" width="700">

The "Functional Unit" profile is the set of tabular information collected and the spatial data(polygons), which in some cases is updated or created by the surveyor. The "Exterior" units polygons data is also part of the "Funcional Unit" profile, although they have no associated set of questions. It is expected that the "Exterior" units spatial data is also verified or upadated during the survey to make it consistent with the corresponding "Functional Unit".

<img src="https://npalomin.github.io/sind/timg/exter.png" width="700">

## Conducting the survey
The survey questions are classified according to the method used to obtain the answer in: __Observed__ (from direct observation), __Desktop__ (post field work) and __Verified__ (surveyee answer). The collection of spatial data predominantly uses both methods: "Observed" (i.e. what you see on site) and "Desktop" (updating spatial data from your field notes). For the spatial data "Desktop" tasks you will be able to access the survey polygons in vector data digital format ("Functional Unit" and "Exterior") and you are expected to edit them using a Geographic Informaton System(GIS) software package QGIS. 

### Survey organisation

Each surveyor will be assigned one or more basemap sheets that correspond to a cell of a grid that covers the study area of Southwark. The surveyor will be responsible of developing the __Functional Unit Profile__ for all the units that are contained on the basemap sheets assigned.

<img src="https://npalomin.github.io/sind/timg/bm_sh.png" width="700">

Some polygons located in the boundaries of the basemap sheets are included in two contiguous sheets (see image below). Coordinate among yourselves to determine to whom is more convenient to survey such cases, so that these are not duplicated (FUC is a unique identifier. EpiCollect will only admit unique values).

<img src="https://npalomin.github.io/sind/timg/border.png" width="700">

### Survey materials
To conduct the survey you will have a hard copy of the __basemap sheets__ showing the "Functional Units" polygons labelled with their __Functional Unit Code__ and the "Exterior" units polygons. Each sheet has a unique page number on the bottom right corner (question number 1.1 on the EpiCollect form). Additionally, you will have the questions of the survey loaded on your EpiCollect app accesible through a smartphone. 

<img src="https://npalomin.github.io/sind/timg/bm_shd.png" width="700">

Also, the digital files for updating the spatial data are part of the survey materials. All items are organised according to the following table in the ["Survey and Mapping Materials"](https://drive.google.com/open?id=1TRAo5habuwfWUAd2T_7rRev4tprVTmEL) shared folder (Note: to open <- link on a new tab *click on link + control key* on Windows, or *click on link + cmd key* on Mac).

|File name|Description|
|:-|:-|
|Basemap sheets catalog|[Gridded map with basemap sheets numbers](https://drive.google.com/open?id=1D2G4zXIH_byx1Ua_rLQDYPSRwjX_9Jys)|
|BUILDINGS| Folder with all Building files corresponding with the basemap sheets numbers|
|PARCELS| Folder with all Parcel files corresponding with the basemap sheets numbers|
|CONTEXT.gpkg| File containing urban context data of the study area|
|*3* .qml files| Files for styling the map in QGIS|

:warning: __NOTE on spatial data license (.gpkg files):__
© Crown copyright Digimap Ordnance Survey. You are permitted to use this data solely to enable you to respond to, or interact with, the organisation that provided you with the data. You are not permitted to copy, sub-licence, distribute or sell any of this data to third parties in any form.

### Survey workflow
To conduct the survey is necessary to follow the next sequence in strict order.

1. Study the basemap sheet to identify a convenient survey route. Use online tools to get gain knowledge of the area you will be surveying (e.g.[Google Maps 3D views](https://www.google.com/maps/@51.5030104,-0.0896289,255a,35y,335.18h,37.32t/data=!3m1!1e3))
2. While on site assess the correspondence between the "Functional Units" polygons on the basemap sheet and the industrial activity you are observing. Hint: Look for clues that can help with your assesment (building directory or intercom, business signs, etc.)
3. If there's a one-to-one clear correspondance go to step 5. If not, you will need to create new "Functional Units" (go to step 4)
4. To create a new "Functional Unit", first outline the polygon shape of the unit or units you're observing in your basemap sheet and label these with a new __Functional Unit Code(FUC)__ according to the following rule: original FUC + a unique __4__ digit number from 1 to n (including preceding zeros). For example, if your basemap shows one polygon with FUC=76, but you observe that there are 3 "Functional Units" within that polygon, the new ones will be labelled '76**0001**', '76**0002**', '76**0003**'.
5. On the EpiCollect app __conduct the survey__ by recording the __Functional Unit Code__ of the corresponding polygon. Note: In the previous example, this corresponds to one of the 3 new created FUCs. The 'original' FUC=76 will not be included on the survey. The first questions can be answered from direct observation (e.g. street name, number). 
6. Assess the correspondance between the "Exterior" units on the basemap and the demarcations of the land you are observing (this can be fences, light divisions, paint, etc). In cases that apply, outline the divisions of the "Exterior" units on your map sheet.

<img src="https://npalomin.github.io/sind/timg/wflow1.png" width="700">

### Survey's non-existing units (NEU)
To identify the industrial units included on the survey different datasets of different date and source were integrated. For this reason, there could be cases while on site that you spot industrial functions that are not identified on the basemap sheets as Functional Units/Buildings. 

In those cases, like the example below, it will be necessary to draw the polygon describing the extent of the premises an create a new FUC with the following rule: basemap sheet number + a unique __5__ digit number from 1 to n (including preceding zeros). So, for example if you observe that there is a functional unit in the area covered by the example below, the new FUC will be '115**00001**'.

<img src="https://npalomin.github.io/sind/timg/arches.png" width="900">

## Hierarchical organisation of spatial units of study
The relations between the pre-existing and new spatial units of study follows a hierarchical structure. This logic is applied to the creation of unique identifiers of the units created or modified.

<img src="https://npalomin.github.io/sind/timg/hier.png" width="750">

As a general rule no polygon should be deleted if it doesn't have _legacy_.

---

# PART 2. Updating spatial data in the maps in QGIS
(*working through an example*)

For the surveys in which you created new "Functional Unit" polygons and updated the "Exterior" unit polygons (step 4 and 6 of the __Survey workflow__) you will need to edit the spatial data digitally according to your field notes. This process will be conducted using QGIS according to the next steps.

<img src="https://npalomin.github.io/sind/timg/notes.png" width="550">

__Before starting:__ 

i) Create a folder on your computer "SIA_mapping" and download the following files from the ["Survey and Mapping Materials"](https://drive.google.com/open?id=1TRAo5habuwfWUAd2T_7rRev4tprVTmEL) shared folder (Note: to open <- link on a new tab *click on link + control key* on Windows, or *click on link + cmd key* on Mac).

- building_st.qml
- parcel_st.qml
- CONTEXT_st.qml
- CONTEXT.gpkg
- b_training.gpkg (from the folder "BUILDINGS")
- p_training.gpkg (from the folder "PARCELS")

<img src="https://npalomin.github.io/sind/timg/1down.png" width="900">

ii) Inside your "SIA_mapping" folder create two new folders: "BUILDINGS_*your nickname*" and "PARCELS_*your nickname*"

---

1. Open QGIS.

<img src="https://npalomin.github.io/sind/timg/2qgis.png" width="700">

---

2. Load spatial data layers (the 3 .gpkg files) in your "SIA_mapping" folder. Drag and drop, or Layer / Add Layer / Add Vector Layer...

<img src="https://npalomin.github.io/sind/timg/3add.png" width="700">

---

3. Organise the layer on the layers panel using drag and drop in the following order 'b_training', 'p_training', 'CONTEXT'. For the updating the spatial data after the surveys from the notes on your __basemap sheets__ you will find the respective file on the "BUILDINGS" and "PARCELS" folder.

<img src="https://npalomin.github.io/sind/timg/4order.png" width="700">

---

4. Add style to the layers. Select layer on the layer panel [mouse rigth click] / Properties... , then at the bottom of the Symbology tab / Style / Load Style... in the next window verify that 'Symbology' and 'Labels' boxes are selected then / File... (browse for the corresponding .qml file -- building, parcel and CONTEXT) Open / Load Style / OK .

<img src="https://npalomin.github.io/sind/timg/5style.png" width="600">
  
--- 
  
5. Explore the map using the wheel of your mouse to pan and zoom. You will see the same information you have on your basemap sheets.

6. Save the project in your "SIA_mapping" folder. / Project / Save as... (use default settings). Save regularly.

7. Before edditing the polygons, enable snapping / Project / Snapping Options . Click on the magnet icon, change the drop down "Vertex" to "Vertex and Segment" and click on "Snapping on intersection" button. Close the window.

<img src="https://npalomin.github.io/sind/timg/6snap.png" width="700">

---

8. To draw new polygons on a layer, select the layer (BUILDING layer then PARCEL layer), turn on the edditing mode (click on the yellow pencil button) and select the Add Polygon Feature (second icon to the right from the yellow pencil). This same procedure should be followed in case of adding [non-existing units (NEU)](https://github.com/npalomin/sind/blob/master/training.md#surveys-non-existing-units-neu).

<img src="https://npalomin.github.io/sind/timg/7edit1.png" width="700">

---

9. Draw by clicking with the mouse left click and finish the polygon with the mouse right click. Add the corresponding new FUC for the polygon you created (e.g. create two new polygons '12190001' and '12190002' on top of polygon '1209').

<img src="https://npalomin.github.io/sind/timg/8draw.png" width="700">

---

10. Select and delete the 'original' polygon (FUC '1209'). Click on button "Select Features by Value...", then in the "FUC" box write the code you want to delete (e.g. 1209) / Close (the window), and then click on the "Delete Selected" button. 

<img src="https://npalomin.github.io/sind/timg/9delete1.png" width="700">

---

11. Stop editing by clicking again on the yellow pencil button and save changes.

12. Verify that you created and deleted the polygons. Select layer on the layer panel, "Open Attribute Table" and look under the "FUC" column. Close the attribute table.

<img src="https://npalomin.github.io/sind/timg/att.png" width="700">

---

13. Export the features layer with a new name. Select layer on the layer panel [mouse right click] / Export... / Save Feature As / File name... / (select the SIA_mapping / BUILDINGS (or PARCELS) folder). Save as: *original layer name* + _ + *your nickname* (e.g. b_training_nicolas or b_sheet_32_nicolas)

<img src="https://npalomin.github.io/sind/timg/10export.png" width="700">

---

14. Upload your files (e.g. b_training_nicolas or b_sheet_32_nicolas) to the corresponding folder [here](https://drive.google.com/open?id=1eFzIlC-bD0ztfXzds9wJEkErAyvOm7E5) / 'New' button / File upload. Verify that you are uploading to the appropriate folder (BUILDINGS or PARCELS) and that the content is not duplicated. 

<img src="https://npalomin.github.io/sind/timg/11upload.png" width="700">

---

15. Reapeat from point 8 choosing the "PARCELS" layer this time (p_training). On the instructions replace "FUC" by "PID" (parcel id) where appropiate.

16. In the case you need to edit the "PARCELS" layers you will need to create new codes for the new polygons you draw. To see the parcel unique indentifier select layer on the layer panel, click on the "Identify Results" button and then on the polygon you want to query. A window "Identify Results" will pop-up and you will see the parcel code next to __PID__. Follow the FUC-code-creation rule to create new codes (e.g. '4560001').

<img src="https://npalomin.github.io/sind/timg/identify.png" width="700">

---

# PART 3.  Special cases

After the first day of field work some special cases appeared that need further clarification and the definition of new rules and mapping processes in QGIS.

### 3.1 Building marked as industrial but is vacant, derelict, etc.
In the case there is a __Building__ polygon on the basemap sheet that you observe is no longer an industrial activity or it has ceased activities, the "Functional Unit'" should still be registered on EpiCollet according to the following:

:warning: *Field 1.1 and 1.2 are __free text__ fields and will admit any type of text entry. In order to be able to analyse this variable is essential that the exact answer provided here is registered.*

|CASE|Answer in question *1.2 Description of organisations activity*|
|-|-|
|There is a building that looks industrial but is __vacant__ | __vacant__ |
|There is a building that looks industrial but is __derelict__ | __derelict__ |
|There is a building that looks __residential__ | __residential__ |
|There is a building that was __demolished__ | __demolished__ | 
|There is a building that is under __development__ | __development__ |
|There is a unit that seems to be industrial use but can't be __identified__ with precision | __unidentifiable__|

Questions 'Nickname', 'Map sheet number', 'FUC', '1.1 Name of organisation', '6.0 Additional notes...', '7.2 Location', '7.3 External photo' should still be answered. 

:information_source: In the cases described here, you shouldn't be doing any modifications to the polyons on the digital file.

### 3.2 Building marked as industrial but is not industrial 
In the case there is a __Building__ polygon on the basemap sheet that you observe that has an activity with no relation at all to industrial uses (i.e. florist, child centre), the "Functional Unit'" should still be registered on EpiCollet according to the following:

|CASE|Answer in question n *1.2 Description of organisations activity*|
|-|-|
|There is a building that has an activity that has no relation to industrial | __fill in the observed activity (e.g. florist)__ |

Questions 'Nickname', 'Map sheet number', 'FUC', '1.1 Name of organisation', '6.0 Additional notes...', '7.2 Location', '7.3 External photo' should still be answered, and 'SIC' in cases that apply.

:information_source: In the cases described here, you shouldn't be doing any modifications to the polyons on the digital file.

### 3.3 Small polygons with FUC adyacent to big polygons with FUC that are the same activity
In case there are polygons with unique FUC grouped together that appear to belong to the same FUC, is necessary to to do only one survey and annotate on the hard copy map which polygons share the same FUC. Then it is necessary to edit this by renaming the smaller polygons in QGIS according to the following process.

| |
|-|
|Select the 'BUILDINGS' layer|
|Select the polygon to edit|
|Turn on editing mode|
|Open Attribute table|
|Search for the cell to edit under the FUC column|
|Modify the FUC|
|Close, the table and turn off editing mode|

<img src="https://npalomin.github.io/sind/timg/fuc_ed.png" width="700">

### 3.4 Parcel marked as industrial but is not industrial
Similar to case 3.2 but applied to the parcel. In this situation is necessary to edit the 'PARCEL' layer in QGIS following the same steps indicated in point 3.3 but changing the fields that apply according to the following:

:warning: *__Free text__ is admited while editing the cell in QGIS so it is essential that the exact answer provided here is registered.*

|CASE|Field to register under the 'landUse' column|
|-|-|
|The parcel (or resultant parcels after spliting it) is __not industrial__ | __non industrial__ |
|The parcel is a __development__ | __development__ |

---

# PART 4. Frequently Asked Questions (FAQ)

> 1. In case the Functional Unit I see on the basemap sheet was demolished, should I complete the survey form?

__Yes, see point 3.1 for details__

> 2. How to define what is industrial from what is observed on site?

__Look for machines, if something is being produced or repaired.  Anything that is industrial should have a FULL survey. If in doubt it is recommended to conduct the survey__

---

# PART 5. Data validation and corrections

Because of the limitations of on-the-ground surveys in some cases, there might be industrial units that were missed or weren't registered with the necessary accuracy, particularly those that weren't identified as functional units on the survey sheets (e.g. Railway arches units). Also, to validate the data collected it is useful to refer to other types of data sources for cross-validation. Given that each surveyor has become an expert of the places they surveyed, the validation (and completion or correction) process considers reviewing each of their own sheets. In order to cross-validate the data that has been collected, we will refer to three additional data sources that will provide us with more detail, might have higher accuracy and up-to-date information. 

It worth reminding that the scale of analysis of this survey is 1:1000, therefore drawings (or drawing improvements) should be done at appropiate scales not smaller than 1:200 (see the bottom bar in QGIS to see the scale corresponding with the zoom level). The accuracy of the drawings is dependant on the scale of analysis therefore the scale must be considered to assess the quality of the drawings.

<img src="https://npalomin.github.io/sind/timg/scal.png" width="500">

### 5.1 Load web map base layer in QGIS

It is possible to load Google Maps (default and satellite maps, and other opendata sources) into QGIS as a basemap layer. Google Maps often has up-to-date information of commercial/retail activities that can be useful to contrast against what was observed and surveyed on the field. Also, the satelllite map offers a highly detailed description of the built environment allowing to identify buildings, fences, walls and other physical elements that can help improve the acurracy of the information registered. 

There are two methods to load Google Maps (and other web map layers into QGIS)

#### 5.1.1 HCMGIS Plugin

Plugins / Manage and Install Plugins... (in All), search for __HCMGIS__ and click on 'Install Plugin'

<img src="https://npalomin.github.io/sind/timg/plug.png" width="700">

Then go to HCMGIS / BaseMap / Google Maps to load the 'Default' style of Google Maps into QGIS. The 'Google Maps' will appear in the layer panel. Drag to the bottom of the layers list if neccesary. It will be possible to see a basemap raster image of Google Maps, with the standard 'places' information displayed. Click/Unclick the drawings layer checkboxes to see what's underneath. 

<img src="https://npalomin.github.io/sind/timg/gmap.png" width="700">

Unlike the Google Maps online version it is not possible to get extra information when clicking on a place on the QGIS google basemap. Visit the [Google Maps page](https://www.google.co.uk/maps/) to get additional data such as website, address, etc. by clicking over the places icons. The information published might help to complete/verify the data registered on the survey forms.

<img src="https://npalomin.github.io/sind/timg/gmextra.png" width="700">


#### 5.1.2 Python script

Copy and paste the following [script](https://raw.githubusercontent.com/klakar/QGIS_resources/master/collections/Geosupportsystem/python/qgis_basemaps.py) into the bottom window of the 'Python Console'. To open the 'Python Console' go to Plugins / Python Console  . Hit enter and then you can close the 'Python Console' to return to the full map view. To load the basemap layers open the 'Browser' panel View / Panels / Browser . Search for __XYZ Tiles__, click on the arrow, select and drag the desired layer (e.g. OpenStreetMap Standard). Click/Unclick the drawings layer checkboxes to see what's underneath.

<img src="https://npalomin.github.io/sind/timg/osm.png" width="700">

### 5.2 Expert judgement data

The ['Southwark Industrial Audit Atlas'](https://drive.google.com/open?id=1PYmRULtcCaI2j-I8nsfzs9x2jWclanxa) (all survey sheets) have been hand annotated highlighting places where there are industrial activities that have not been surveyed and other notes that can complement the field survey. The annotated altas sheets can be found [here](https://drive.google.com/open?id=1KVXiMyabyHlm9OKqbKMG9OgPOdhjqQCs).

:warning: The areas identified as industrial in the annotated sheets that were observed as not industrial should be drawn and assigned a polygon 'id' with the following rule: __11111 + sheet number + correlative number__ (e.g. 11111 32 1 -*without spaces*). Although, these areas are spatial representations of a different nature than the FU they are still valuable for the purposes of the research. A survey form should be filled-in indicating the corresponding polygon ID and any observation in the section '6.0 Additional notes...' when necessary. To draw a polygon follow the process deteiled in point 8 of [Part 2](https://github.com/npalomin/sind/blob/master/training.md#part-2-updating-spatial-data-in-the-maps-in-qgis)

### 5.3 Fire insurance maps and plans (Goad Maps) & planning applications

Particularly for the cases of railway arches additional detailed maps have been collected and organized for each sheet on this [shared folder](https://drive.google.com/open?id=1NpLTIFDm-01-b23cn8cxboj_hhbwYasF). These maps provide a higher-resolution description that can help outline a more precise shape of the units underneath the railway arches.

<img src="https://npalomin.github.io/sind/timg/goad.png" width="700">

---

In the cases when polygons need small corrections follow the next steps. Select the layer to edit, turn the editing mode on and use the __Vertex tool__ to edit the vertices of the polygons by clicking and moving. Add new polygons as required following the standard process.

<img src="https://npalomin.github.io/sind/timg/vertex.png" width="600">
