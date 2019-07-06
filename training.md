# Southwark Industrial Audit(SIA) field survey training

## Context
This training covers the steps to conduct a field survey of industrial "Functional Units" in Southwark.
The focus is on collecting information about the physical characteristics of the "Building" and "Parcel" where indusrial activities take place.

## Key definitions
> _Building_. Permanent roofed construction, usually with walls (OS Mastermap Topography Layer).

> _Parcel_. Shapes that show the position and indicative extent of ownership for each registered property at ground level.

> _Functional Unit_. The premises where a uniform industrial activity takes place, 
disregarding the type of tenure or physical structure of the space that accommodates the activity.

> _Exterior_. A demarcated private land that contains one or more functional units.

## Basemap
The basemap to conduct the survey is composed originally of two polygon layers: "Building" and "Parcel" which we conceptualize as "Functional Unit" and "Exterior" respectively. Polygons are closed shapes from which certain geometric properties can be derived (e.g. area, perimenter). There are more than 1000 "Functional Units" polygons on the basemap of the survey area each of which have a unique identifier, the __Functional Unit Code(FUC)__. Similarly, "Exterior" units polygons have a unique identifier, and they can have a one-to-many realtionship with the "Functional Units" (i.e. multi-units industrial estates).

<img src="https://npalomin.github.io/sind/timg/bmap.png" width="650>

## Functional Unit Profile
To conduct the SIA survey we will use a Gographic Information System (GIS) database approach. Essentially, this means that each of the "Functional Units" polygons (spatial data) has a set of associated attributes (e.g. the answers to the survey's questions) structured as a table. In the table each row corresponds to one polygon (with unique identifier) and each column corresponds to an attribute of the polygon. 

![gis](https://npalomin.github.io/sind/timg/pol_tab.png)

The "Functional Unit" profile is the set of spatial data(polygons) and tabular information collected, and in some cases updated or created, by the surveyor. The "Exterior" units polygons data is also part of the "Funcional Unit" profile, although they have no associated set of questions. It is expected that the "Exterior" units spatial data is verified or upadated during the survey to make it consistent with the corresponding "Functional Unit".

![exterior](https://npalomin.github.io/sind/timg/exter.png)

## Conducting the survey
The survey questions are classified according to the method used to obtain the answer in: Observation, Interaction and Desktop. The collection of spatial data is mainly based on direct "Observation" (i.e. what you see on site) and "Desktop" (updating spatial data from your field notes). For the spatial data "Desktop" tasks you will be able to access the survey polygons in vector data digital format ("Functional Unit" and "Exterior") and you are expected to edit them using a Geographic Informaton System(GIS) software package QGIS. 

Each surveyor will be assigned one or more basemap sheets that correspond to a cell of a grid that covers the study area of Southwark. The surveyor will be responsible of developing the __Functional Unit Profile__ for all the units surveyed that are contained on the basemap sheets assigned.

### Survey materials
To conduct the survey you will have a hard copy of the basemap sheets showing the "Functional Units" polygons labelled with their __Functional Unit Code__ and the "Exterior" units polygons. Additionally, you will have the questions of the survey loaded in your EpiCollect app accesible through a smartphone. 

![org](https://npalomin.github.io/sind/timg/bm_sh.png)

![sheet](https://npalomin.github.io/sind/timg/bm_shd.png)

Also, the files for updating the spatial data are part of the survey materials. All items are organised according to the following table in the ["Survey and Mapping Materials"](https://drive.google.com/open?id=1TRAo5habuwfWUAd2T_7rRev4tprVTmEL) shared folder.



### Survey workflow
To conduct the survey is necessary to follow the next sequence in strict order.

1. Study the basemap sheet to identify a convenient survey route.
2. While on site assess the correspondance between the "Functional Units" polygons on the basemap and the industrial activity you are observing. Hint: Look for clues that can help with your assesment (building directory, business signs, etc.)
3. If there's a one-to-one clear correspondance go to step 5. If not, you will need to create new "Functional Units" (go to step 4)
4. To create a new "Functional Unit", first outline the polygon shape of the unit or units you're observing in your basemap sheet and label these with a new __Functional Unit Code(FUC)__ according to the following rule: original FUC + a unique 3 digit number from 1 to n (including zeros). For example, if your basemap shows one polygon with FUC=76, but you observe that there are 3 "Functional Units" within that polygon, the new ones will be labelled '760001', '760002', '760003'.
5. On the EpiCollect app conduct the survey by recording the __Functional Unit Code__ of the corresponding polygon. Note: In the previous example, this corresponds to one of the 3 new created FUCs. The 'original' FUC=76 will not be included on the survey.
6. Assess the correspondance between the "Exterior" units on the basemap and the demarcations of the land you are observing (this can be fences, light divisions, paint, etc)
7. In cases that apply, on your map outline the divisions the "Exterior" units.

## Updating Spatial Data
For the surveys in which you created new "Functional Unit" polygons and updated the "Exterior" unit polygons (step 4 and 6) you will need to edit the spatial data digitally according to your field notes. This process will be conducted using QGIS.



