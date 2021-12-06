以 `RESTful` 為例

針對 user 做 crud

# Create

```
POST /users
Content-Type: application/json
{
  "name": "danny",
	"age":18
}
```

# Read

## read list

```

GET /users

```

## read item

```

GET /users/{id}

```

## filter

```

GET /users?page=1&pageSize=20

```

# Update

## 覆蓋修改

```
PUT /users/{id}
Content-Type: application/json
{
  "name": "danny",
	"age":18
}
```

## 片段修改

```
PATCH /users/{id}
Content-Type: application/json
{
	"age":18
}
```

# Delete

```
DELETE /users/{id}
```
