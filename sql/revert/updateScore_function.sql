-- Revert ts-open-api-crud:updateScore_function from pg

BEGIN;

DROP FUNCTION score_update;

COMMIT;
