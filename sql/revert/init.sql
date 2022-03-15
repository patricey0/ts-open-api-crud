-- Revert ts-open-api-crud:init from pg

BEGIN;

DROP TABLE "player";

COMMIT;
