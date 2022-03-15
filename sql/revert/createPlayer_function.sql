-- Revert ts-open-api-crud:createPlayer_function from pg

BEGIN;

DROP FUNCTION new_player;

COMMIT;
