-- Custom SQL migration file, put you code below! --
ALTER TABLE users_sessions ADD COLUMN new_expires_at TIMESTAMP;
UPDATE users_sessions SET new_expires_at = TO_TIMESTAMP(expires_at);
ALTER TABLE users_sessions DROP COLUMN expires_at;
ALTER TABLE users_sessions RENAME COLUMN new_expires_at TO expires_at;