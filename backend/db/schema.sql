DROP DATABASE IF EXISTS mvp_entertainer;

CREATE DATABASE mvp_entertainer;

\c mvp_entertainer;

CREATE TABLE users (
 id BIGSERIAL,
 first_name VARCHAR(20),
 last_name VARCHAR(20),
 username VARCHAR(50)
);


ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

CREATE TABLE events (
 id BIGSERIAL,
 user_id INTEGER,
 event_id VARCHAR(50),
 name VARCHAR(200),
 image_url VARCHAR(500),
 segment VARCHAR(50),
 time TIME,
 date DATE,
 venue VARCHAR(50),
 city VARCHAR(50),
 state VARCHAR(50),
 price_min NUMERIC,
 price_max NUMERIC,
 ticket_url VARCHAR(500)
);


ALTER TABLE events ADD CONSTRAINT events_pkey PRIMARY KEY (id);

ALTER TABLE events ADD CONSTRAINT events_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);

CREATE INDEX IF NOT EXISTS idx_events_userid ON events (user_id);
