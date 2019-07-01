# Southwark Industrial Audit(SIA) field survey training

## Context
This training covers the steps to conduct a field survey of industrial "Functional Units" in Southwark.
The focus is on collecting information about the physical characteristics of the "Building" and "Parcel" where indusrial activities takes place.

## Key definitions
> _Building_. Permanent roofed construction, usually with walls (OS Mastermap Topography Layer).

> _Parcel_. Shapes that show the position and indicative extent of ownership for each registered property at ground level.

> _Functional Unit_. The premises where a uniform industrial activity takes place, 
disregarding the type of tenure or physical structure of the space that accommodates the activity.

> _Exterior_. A demarcated private land that contains one or more functional units.

## Basemap
The basemap to conduct the survey is composed originally of two polygon layers: "Building" and "Parcel" which we conceptualize as "Functional Unit" and "Exterior" respectively. Polygons are closed shapes from which certain geometric properties can be derived (e.g. area, perimenter). There are more than 1000 "Functional Units" on the basemap of the survey area each of which have a unique identifier. Similarly, "Exterior" units have a unique identifier, and they can have a one-to-many realtionship with the "Functional Units" (i.e. multi-units industrial estates).



## Functional Unit Profile
To conduct the SIA survey we will use a Gographic Information System (GIS) database approach. Essentially, this means that each of the "Functional Units" polygons (spatial data) has a set of associated attributes (e.g. the answers to the survey's questions structured as a table). 

