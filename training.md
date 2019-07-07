---
Title: |
    Southwark Industrial Audit(SIA) field survey training
authors:
- Nicolas Palominos
Date: Jul-2019
---

# Southwark Industrial Audit(SIA) field survey training

[__PART 1.__ The paper map, the spatial "functional unit" and QGIS](https://github.com/npalomin/sind/blob/master/training.md#part-1-the-paper-map-the-spatial-functional-unit-and-qgis)

[__PART 2.__ Updating spatial data in the maps in QGIS](https://github.com/npalomin/sind/blob/master/training.md#part-2-updating-spatial-data-in-the-maps-in-qgis)

---

# PART 1. The paper map, the spatial "functional unit" and QGIS

## Context
This training covers the steps to conduct a field survey of industrial "Functional Units" in Southwark.
The focus is on __collecting information about the physical characteristics__ of the "Building" and "Parcel" where indusrial activities take place.

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
The survey questions are classified according to the method used to obtain the answer in: __Verified__ (from direct observation) and __Desktop__. The collection of spatial data uses both methods: "Verified" (i.e. what you see on site) and "Desktop" (updating spatial data from your field notes). For the spatial data "Desktop" tasks you will be able to access the survey polygons in vector data digital format ("Functional Unit" and "Exterior") and you are expected to edit them using a Geographic Informaton System(GIS) software package QGIS. 

Each surveyor will be assigned one or more basemap sheets that correspond to a cell of a grid that covers the study area of Southwark. The surveyor will be responsible of developing the __Functional Unit Profile__ for all the units that are contained on the basemap sheets assigned.

<img src="https://npalomin.github.io/sind/timg/bm_sh.png" width="700">

### Survey materials
To conduct the survey you will have a hard copy of the __basemap sheets__ showing the "Functional Units" polygons labelled with their __Functional Unit Code__ and the "Exterior" units polygons. Each sheet has a unique page number on the bottom right corner (question number 1.1). Additionally, you will have the questions of the survey loaded on your EpiCollect app accesible through a smartphone. 

<img src="https://npalomin.github.io/sind/timg/bm_shd.png" width="700">

Also, the digital files for updating the spatial data are part of the survey materials. All items are organised according to the following table in the ["Survey and Mapping Materials"](https://drive.google.com/open?id=1TRAo5habuwfWUAd2T_7rRev4tprVTmEL) shared folder.

|File name|Description|
|:-|:-|
|Basemap sheets catalog|[Gridded map with basemap sheets numbers](https://drive.google.com/open?id=1D2G4zXIH_byx1Ua_rLQDYPSRwjX_9Jys)|
|BUILDINGS| Folder with all Building files corresponding to the basemap sheets numbers|
|PARCELS| Folder with all Parcel files corresponding to the basemap sheets numbers|
|CONTEXT.gpkg| File containing urban context data of the study area|
|*3* .qml files| Files for styling the map in QGIS|

### Survey workflow
To conduct the survey is necessary to follow the next sequence in strict order.

1. Study the basemap sheet to identify a convenient survey route.
2. While on site assess the correspondance between the "Functional Units" polygons on the basemap and the industrial activity you are observing. Hint: Look for clues that can help with your assesment (building directory, business signs, etc.)
3. If there's a one-to-one clear correspondance go to step 5. If not, you will need to create new "Functional Units" (go to step 4)
4. To create a new "Functional Unit", first outline the polygon shape of the unit or units you're observing in your basemap sheet and label these with a new __Functional Unit Code(FUC)__ according to the following rule: original FUC + a unique 4 digit number from 1 to n (including preceding zeros). For example, if your basemap shows one polygon with FUC=76, but you observe that there are 3 "Functional Units" within that polygon, the new ones will be labelled '760001', '760002', '760003'.
5. On the EpiCollect app conduct the survey by recording the __Functional Unit Code__ of the corresponding polygon. Note: In the previous example, this corresponds to one of the 3 new created FUCs. The 'original' FUC=76 will not be included on the survey.
6. Assess the correspondance between the "Exterior" units on the basemap and the demarcations of the land you are observing (this can be fences, light divisions, paint, etc)
7. In cases that apply, on your map outline the divisions the "Exterior" units.

---

# PART 2. Updating spatial data in the maps in QGIS
(*working through an example*)

For the surveys in which you created new "Functional Unit" polygons and updated the "Exterior" unit polygons (step 4 and 6) you will need to edit the spatial data digitally according to your field notes. This process will be conducted using QGIS according to the next steps.

Before starting create a folder on your computer "SIA_mapping" and download the following files from the ["Survey and Mapping Materials"](https://drive.google.com/open?id=1TRAo5habuwfWUAd2T_7rRev4tprVTmEL) shared folder. 

- building_st.qml
- parcel_st.qml
- CONTEXT_st.qml
- CONTEXT.gpkg
- 0_training.gpkg (from the folder "BUILDINGS")
- 1_training.gpkg (from the folder "PARCELS")

Inside your "SIA_mapping" folder create a two new folders: "BUILDINGS_*your nickname*" and "PARCELS_*your nickname*"

1. Open QGIS.

2. Load spatial data layers (the 3 .gpkg files). Drag and drop, or Layer / Add Layer / Add Vector Layer...

3. Organise the layer on the layers panel using drag and drop in the following order '0_training', '1_training', 'CONTEXT'. For the updating the spatial data after the surveys from the notes on your __basemap sheets__ you will find the respective file on the "BUILDINGS" and "PARCELS" folder.

4. Add style to the layers. Select layer on the layer panel [mouse rigth click] / Properties... , then at the bottom of the Symbology tab / Style / Load Style... in the next window verify that 'Symbology' and 'Labels' boxes are selected then / File... (browse for the corresponding .qml file) Open / Load Style / OK .
  
5. Explore the map using the wheel of your mouse to pan and zoom. You will see the same information you have on your basemap sheets.

6. Save the project in your "SIA_mapping" folder. / Project / Save as... (use default settings). Save regularly.

7. Before edditing the polygons, enable snapping / Project / Snapping Options . Click on the magnet icon, change the drop down "Vertex" to "Vertex and Segment" and click on "Snapping on intersection" button. Close the window.

8. To add new polygons to a layer, select the layer, turn on the edditing mode (click on the yellow pencil button) and select the Add Polygon Feature (second icon to the right from the yellow pencil).

9. Draw by clicking with the mouse left click and finish the polygon with the mouse right click. Add the corresponding new FUC for the polygon you created (e.g. create two new polygons '12190001' and '12190002').

10. Select and delete the 'original' polygon (FUC '1219'). Click on button "Select Features by area or single click", select the corresponding polygon (would be highlighted in yellow) and then click on the "Delete Selected" button. 

11. Stop edditing by clicking again on the yellow pencil button and save changes.

12. Export the features layer with a new name. Select layer on the layer panel [mouse rigth click] / Export... / Save Feature As / File name... / (select the "FUC profiles" folder). Save as: *original layer name* + _ + *your nickname* (e.g. page_32_nicolas)

13. Upload your files (e.g. page_32_nicolas) to the corresponding folder [here](https://drive.google.com/open?id=1eFzIlC-bD0ztfXzds9wJEkErAyvOm7E5) / 'New' button / File upload. Verify that you are uploading to the appropriate folder (BUILDINGS or PARCELS) and that the content is not duplicated. 

14. Reapeat from point 8 choosing the "PARCELS" layer this time (1_training)




