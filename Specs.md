# API Spec

## Authentication

All API must use this authentication

Request :
- Header :
    - X-Api-Key : "your secret api key"

## Get Latest Internal Event Article

Request :
- Method : GET
- Endpoint : `/api/latest-event`
- Header :
    - Content-Type: application/json
- Query Param :
    - offset : number,
    - limit : number


Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [{
         "id" : "string, unique",
         "title" : "string",
         "date" : "string",
         "img_path" : "string",
     }]
}
```

## Get Proker with filter by status

Request :
- Method : GET
- Endpoint : `/api/proker`
- Header :
    - Accept: application/json

<br />

- Body :
```json 
{
    "status" : "string",
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [{
         "id" : "string, unique",
         "titile" : "string",
         "department" : "string",
         "description" : "string",
         "date": "date",
     }]
}
```



## Get Visi Misi

Request :
- Method : GET
- Endpoint : `/api/visi-misi`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "images": [{
            "img_path": "string",
            "name": "string",
            "department": "string"
        }],
        "visi": "string",
        "misi": "string"
    }
}
```

## Get Struktur Organisasi

Request :
- Method : GET
- Endpoint : `/api/struktur`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data": [{
        "department": "string",
        "description" : "string",
        "member": [{
            "name": "string",
            "prodi": "string",
            "role": "string",
            "img_path": "string",
        }]
    }]
}
```

## Get Member Portfolio

Request :
- Method : GET
- Endpoint : `/api/portfolio`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data": [{
        "title": "string",
        "author": "string",
        "img_path": "string",
    }]
}
```