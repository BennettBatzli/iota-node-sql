﻿CREATE TABLE people
    (
        id serial NOT NULL,
        name character varying(255) NOT NULL,
        address character varying(255) NOT NULL,
        city varchar(100) NOT NULL,
        state varchar(3) NOT NULL,
        zip_code varchar(5) NOT NULL,
        CONSTRAINT people_pkey PRIMARY KEY (id)
    );