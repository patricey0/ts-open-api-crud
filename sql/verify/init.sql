-- Verify ts-open-api-crud:init on pg

BEGIN;

SELECT * FROM "player" WHERE false;

ROLLBACK;
