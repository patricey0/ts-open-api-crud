-- Deploy ts-open-api-crud:init to pg

BEGIN;

CREATE TABLE IF NOT EXISTS player (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudo TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    best_score INT
);


COMMIT;
