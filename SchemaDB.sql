-- Table: public.utente

-- DROP TABLE public.utente;

CREATE TABLE public.utente
(
    email character varying(60) COLLATE pg_catalog."default",
    username character varying(60) COLLATE pg_catalog."default",
    pw character varying(60) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.utente
    OWNER to postgres;



-- Table: public.reviews

-- DROP TABLE public.reviews;

CREATE TABLE public.reviews
(
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    rating smallint NOT NULL,
    submit_date date NOT NULL,
    CONSTRAINT reviews_pkey PRIMARY KEY (name)
)

TABLESPACE pg_default;

ALTER TABLE public.reviews
    OWNER to postgres;