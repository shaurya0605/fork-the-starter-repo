# Hoen Scanner Microservice

A Java Dropwizard microservice that searches for hotels and rental cars by city.

## Technologies Used
- Java (OpenJDK 19)
- Dropwizard
- Jackson
- Maven

## Setup Instructions

1. Clone the repository
2. Open in IntelliJ IDEA
3. Click **Load Maven Project** when prompted
4. Run `HoenScannerApplication.java`

## API Usage

### Search Endpoint
- **URL:** `POST localhost:8080/search`
- **Content-Type:** `application/json`

### Request Body
```json
{"city": "petalborough"}
```

### Example Response
```json
[
  {"city": "petalborough", "title": "Hotel Example", "kind": "hotel"},
  {"city": "petalborough", "title": "Car Rental Example", "kind": "rental_car"}
]
```

## Available Cities
- `petalborough`
- `rustburg`
- `shaleport`
