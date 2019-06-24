## Spatial data preprocessing

### Spatial unit of study

To conduct the spatial study that captures the intensity, diversity and character of industrial activities in Southwark is necessary to establish a definition of the spatial unit of study. Conceptually, the physical study of 'Industrial Activities' encompass two core ideas: the nature of the industrial activity or function and the premises where that activity takes place. The spatial unit of study has been conceptualized as a 'Functional Unit', which is an industrial economic activity that doesn't necessarilly fits spatially across an entire buliding or parcel (the most common spatial units of urban surveys). In many cases, more than one 'Industrial Activity' takes place within a building or parcel.

The 'Industrial Functional Unit' for the SIA study is:

__The premises where a uniform industrial activity takes place, disregarding the type of tenure or physical structure of the space that accommodates the activity.__

### Data sources

There exist a variety of available open and propietary data sources relevant for the SIA study. 
In order to come up with a systematic methodology of data selection two criteria were defined: precision and accuracy.

To identify where do industrial activities take place two key data set sets were analysed:

|Name|Description|URL|
|-|-|-|
|INSPIRE Index Polygons|Cadastral parcels. Registered extent of freehold properties in England and Wales|[https://www.gov.uk/government/publications/southwark-inspire-index-polygon-data](here)|
|GLA_Ind_Land_Baseline_2015_Designations|Industrial polygons by designation|Propietary GLA (Alex Marsh)|

Both datasets have spatial resolution at parcel level (1:1000). However, the __cadastral parcels__ have a more detailed subdivision which is
more appropiate for the survey of __Industrial Functional Units__

### Data integration

Both datasets were intergrated and combined to get a merge of parcel polygons with industrial designations.
Not all the cadastral parcels overlayed with the industrial polygons so the following geoproecesses were applied:

- Intersect parcels with industrial polygons (Parcels which 'point on surface' are within industrial polygons)
- Add those industrial polygons that are _outside_ the parcel polygons definition.

### Data generalization

As a result of the previous operation we get 1922 features. However, a visual inspection of some features shows some innacuracies
specially in the polygons classified as NAL. This innacuracies correspond to: doubtful industrial activity according to street level observation 
(Google Street View) and parcel boundaries that describe a building rather than a parcel or 'site' boundary.

The innacurate polygons have a similar LU_CODE_20 attribute of '9' and '25'. Therefore those two classes were filtered from the NALs layer (566 and 74 features respectively)




