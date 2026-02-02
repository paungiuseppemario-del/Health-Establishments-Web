# Requirements

## User Needs

### Actors
Actors would use this with booking appointments, checking for opening times, checking nearests farmacies. 
TODO: List and describe the actors/users for this product.
. patients
. Doctors
. Pharmasists
. Nurses


### User stories
Patients would use this to be able to find appointments, closest pharmacies, gps etc.
Doctors/nurses would use this to manage and see appointments they are booked in for, patient medical history.
Pharmasists would use this to manage someones medication, find local pharmacies for patients if they dont have stock of a certain medication, check patients medical history for allergies or previous medication taken.
### Use Cases
TODO: Describe each use case (one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| USE-CASE | UC1: Find nearest pharmacy | 
| -------- | ---------------------------------- |
| **Description** | As a Patient I would like to be able to find the nearest pharmasies to me|
| **Actors** |Patient |
| **Assumptions** | Browser supports geo-location |
| **Steps** | <ol><li>Opt to view map of Pharmacies</li><li>Request permission to access user location</li><li>Give permission for geo-location</li><li>Get nearest pharmacies from database</li><li>View table of nearest Pharmacies</li></ol> |
| **Variations** | Browser doesn't support geo-location |
| **Non-functional** | Performance: Return results within 2 seconds for typical searches.
Security/Privacy: Location used only for this search, not stored without consent; comply with GDPR; use HTTPS.
Availability: 99.5%+ uptime for the pharmacy search service.
Accessibility: WCAG 2.1 AA (keyboard navigation, screen reader labels for map/list).
Usability: Clear permission rationale; provide manual search alternative.
Reliability: Handle permission denial/timeouts gracefully; show meaningful errors.
Scalability: Support spikes (e.g., seasonal demand) without major degradation. |
| **Issues** | Define default search radius and max expansion. Confirm required pharmacy attributes (opening hours, services like “late-night”, “delivery”). Decide which map provider is used and any licensing constraints. Define data refresh frequency and source of truth for pharmacy listings. Decide whether to support “open now” and filters (distance, services). 

| USE-CASE | UC1: Find nearest facilities | 
| -------- | ---------------------------------- |
| **Description** | As a doctor or nuse I would like to be able to find the nearest pharmacy/hospital/GP etc.|
| **Actors** |Doctor/nurse|
| **Assumptions** | Browser supports geo-location |
| **Steps** | <ol><li>Opt to view map of facilities</li><li>Request permission to access user location</li><li>Give permission for geo-location</li><li>Get nearest facilities from database</li><li>View table of nearest nearest facilities</li></ol> |
| **Variations** | Browser doesn't support geo-location |
| **Non-functional** | Performance: Return results within 2 seconds for typical searches.
Security/Privacy: Location used only for this search, not stored without consent; comply with GDPR; use HTTPS.
Availability: 99.5%+ uptime for the pharmacy search service.
Accessibility: WCAG 2.1 AA (keyboard navigation, screen reader labels for map/list).
Usability: Clear permission rationale; provide manual search alternative.
Reliability: Handle permission denial/timeouts gracefully; show meaningful errors.
Scalability: Support spikes (e.g., seasonal demand) without major degradation. |
| **Issues** | Define default search radius and max expansion. Confirm required facilities attributes (opening hours, services like “late-night”, “delivery”). Decide which map provider is used and any licensing constraints. Define data refresh frequency and source of truth for facilities listings. Decide whether to support “open now” and filters (distance, services). 



TODO: Your Use-Case diagram should include all use-cases.
2 use cases

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.
    
* FR1: The system must  detect user location
* FR2: The system must  include manual location entry
* FR3: The system must be able to search by facility type
* FR4: The system must include a keyword search
* FR5: The system must include a radius selection
* FR6: The system could auto expand search

<dl><dt>FR1:</dt><dd>The system shall provide a menu of available options</dd>
    <dt>FR2:</dt><dd>The system shall request permission to access user location</dd>
    <dt>FR3:</dt><dd>The system shall get nearest Pharmacies pumps from database</dd>
    <dt>FR4:</dt><dd>The system shall show a table of the nearest Pharmacies</dd>
</dl>
2 use cases

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.

* NFR1: It should display up to 10 of the nearest bike pumps on one page (usability) (UC1)
* NFR2: It must assume a sensible default on a browser with no user geolocation (reliability) (UC2)
* NFR3: The listed bike pumps should be no further than 1 mile from the cyclist (usability) (UC1,UC2)
* NFR4: The App should work on Android (Portability)

