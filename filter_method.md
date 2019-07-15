---
Date: Jul-2019
Title: |
  Spatial data preprocessing
authors: Nicolas Palominos
output: pdf_document
---

<img src="https://npalomin.github.io/sind/timg/logos.png" width="300">

---

## Spatial data preprocessing

### Spatial unit of study

To conduct the spatial study that captures the intensity, diversity and character of industrial activities in Southwark is necessary to establish a definition of the spatial unit of study. Conceptually, the physical study of 'Industrial Activities' encompasses two core ideas: the nature of the industrial activity or function and the premises where that activity takes place. The spatial unit of study has been conceptualized as a __'Functional Unit'__, which is an industrial economic activity that doesn't necessarily fits spatially across an entire building or parcel (the two most common spatial units on urban topographic surveys). In many cases, more than one 'Industrial Activity' takes place within a building or parcel.

In the context of this study __'Functional Unit'__ is defined as:

__The premises where a uniform industrial activity takes place, disregarding the type of tenure or physical structure of the space that accommodates the activity.__

(based on [Basic Land and Property Unit](https://www.geoplace.co.uk/documents/10181/131542/LLPG%20Data%20Entry%20Conventions))

### Data sources

There exist a variety of available open and proprietary data sources relevant for the SIA study. 
In order to come up with a systematic methodology of data selection two criteria were defined: precision and accuracy.

To identify where do industrial activities take place three key data set sets were analysed:

|Description|SIA name|URL|
|-|-|-|
|INSPIRE Index Polygons Cadastral parcels. Registered extent of freehold properties in England and Wales|Parcels|[https://www.gov.uk/government/publications/southwark-inspire-index-polygon-data](here)|
|GLA_Ind_Land_Baseline_2015_Designations|Baseline|Proprietary GLA (Alex Marsh)|Baseline|
|OS MasterMap Topography Layer - Buildings (Digimap) |Buildings|[https://www.ordnancesurvey.co.uk/business-and-government/products/topography-layer.html](here)|

These datasets have spatial resolution at parcel/building level (1:1000 approximately). However, the cadastral __parcels__ have a more detailed subdivision which was considered more appropiate for the survey of industrial __Functional Units__. Therefore, to get a better representation of the subject of study it is necessary to integrate these datasets.

### Data integration

Both datasets were intergrated and combined to get a merge of __Parcels__ polygons with the __Baseline__ industrial designations.
Not all the cadastral __Parcels__ overlay with the industrial polygons so the following geoproecesses were applied:

- Intersect __Parcels__ with __Baseline__ polygons (Parcels which 'point on surface' are within Baseline polygons)
- Add those __Baseline__ polygons that are _outside_ the __Parcels__ polygons definition.

### Data generalization

As a result of the previous operation we get 1922 features from the __Parcels__ layer. However, a visual inspection of some features shows some innacuracies specially in the polygons classified as NAL. These innacuracies correspond to: uncertain industrial activity according to street level observation (Google Street View) and parcel boundaries shape with too much detail that describe a building rather than a parcel or 'site' boundary (e.g.: docks).

Similarly, the analysis of the __Buildings__ layer has polygons that are too small or have 'elongated' shapes where it is unlikely that an industrial activity might take place.

#### Geometric generalization
##### Parcels
- Delete parcels with area <= 10 sqm & delete duplicates (154 features)
/Volumes/ucfnnap/SINDA/GIS_analysis/PARCELS_land_registry_ind_land.shp (n = 1768)

Next step the polygons of the __Buildings__ layer (OS MasterMap) that overlay with the parcels layers are selected n = 2958 buildings.

##### Buildings
- Delete polygons <= 15 sqm (526 features)
- Delete 'elongated' polygons (31 features)
- Delete duplicates (and topological errors) (373 features)
/Volumes/ucfnnap/SINDA/GIS_analysis/BUILDINGS_ed.shp (n = 2128)

#### Semantic generalization
For the __Buildings__ and __Parcels__ layers a generalization according to 'Land Use' attribute was applied. 

~~The innacurate polygons have a similar LU_CODE_20 attribute of '9' and '25'. Therefore those two classes were filtered from the NALs layer (566 and 74 features respectively)~~



Buildings FUC sequence by Type of Industrial Designated Land

|Type | n|FUC range|
|-|-|-|
|SIL|616|1 - 616|
|LSIS|146|617 - 762|
|NAL|1366|762 - 2128|



