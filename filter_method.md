## Spatial data preprocessing

### Spatial unit of study

To conduct the spatial study that captures the intensity, diversity and character of industrial activities in Southwark is necessary to establish a definition of the spatial unit of study. Conceptually, the physical study of 'Industrial Activities' encompasses two core ideas: the nature of the industrial activity or function and the premises where that activity takes place. The spatial unit of study has been conceptualized as a 'Functional Unit', which is an industrial economic activity that doesn't necessarily fits spatially across an entire building or parcel (the two most common spatial units of urban surveys). In many cases, more than one 'Industrial Activity' takes place within a building or parcel.

The 'Industrial Functional Unit' for the SIA study is:

__The premises where a uniform industrial activity takes place, disregarding the type of tenure or physical structure of the space that accommodates the activity.__

(based on [Basic Land and Property Unit](https://www.geoplace.co.uk/documents/10181/131542/LLPG%20Data%20Entry%20Conventions))

### Data sources

There exist a variety of available open and proprietary data sources relevant for the SIA study. 
In order to come up with a systematic methodology of data selection two criteria were defined: precision and accuracy.

To identify where do industrial activities take place two key data set sets were analysed:

|Name|Description|URL|
|-|-|-|
|INSPIRE Index Polygons|Cadastral parcels. Registered extent of freehold properties in England and Wales|[https://www.gov.uk/government/publications/southwark-inspire-index-polygon-data](here)|
|GLA_Ind_Land_Baseline_2015_Designations|Industrial polygons by designation|Proprietary GLA (Alex Marsh)|

Both datasets have spatial resolution at parcel level (1:1000). However, the __cadastral parcels__ have a more detailed subdivision which is
more appropiate for the survey of __Industrial Functional Units__

### Data integration

Both datasets were intergrated and combined to get a merge of parcel polygons with industrial designations.
Not all the cadastral parcels overlayed with the industrial polygons so the following geoproecesses were applied:

- Intersect parcels with industrial polygons (Parcels which 'point on surface' are within industrial polygons)
- Add those industrial polygons that are _outside_ the parcel polygons definition.

- Geoprocessing Sequence: Difference, v.clean, minimum enclosing circle, 

### Data generalization

As a result of the previous operation we get 1922 features from the parcel layer. However, a visual inspection of some features shows some innacuracies
specially in the polygons classified as NAL. This innacuracies correspond to: unclear industrial activity according to street level observation 
(Google Street View) and parcel boundaries shape that describe a building rather than a parcel or 'site' boundary.

#### Semantic generalization
~~The innacurate polygons have a similar LU_CODE_20 attribute of '9' and '25'. Therefore those two classes were filtered from the NALs layer (566 and 74 features respectively)~~

#### Geometric generalization
##### Parcels
- Delete parcels with area < 10m2 (172 features)

Next step the polygons of the building layer (OS Mastermap) that overlay with the parcels layers are selected n = 2958 buildings.

##### Buildings
- ~~Delete polygons <= 15m2 (563 features)~~
- ~~Delete 'elongated' polygons (37 features). New n = 2358~~

### Draft interactive maps

#### Filter 1
As described above (n = 2358)

https://npalomin.github.io/sind/filter_1.html


#### Filter 2
Features with class = NAL & URSID = NULL filtered (n = +1000)

https://npalomin.github.io/sind/filter_2.html


