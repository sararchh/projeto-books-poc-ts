PGDMP     "    -                 {            books    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    25079    books    DATABASE     |   CREATE DATABASE books WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE books;
                postgres    false            ?            1259    25092    author    TABLE     P   CREATE TABLE public.author (
    id integer NOT NULL,
    name text NOT NULL
);
    DROP TABLE public.author;
       public         heap    postgres    false            ?            1259    25091    author_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.author_id_seq;
       public          postgres    false    215                       0    0    author_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;
          public          postgres    false    214            ?            1259    25101    books    TABLE     ?   CREATE TABLE public.books (
    id integer NOT NULL,
    name text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    author integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.books;
       public         heap    postgres    false            ?            1259    25100    books_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.books_id_seq;
       public          postgres    false    217                       0    0    books_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
          public          postgres    false    216            j           2604    25095 	   author id    DEFAULT     f   ALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);
 8   ALTER TABLE public.author ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            k           2604    25104    books id    DEFAULT     d   ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);
 7   ALTER TABLE public.books ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217                      0    25092    author 
   TABLE DATA           *   COPY public.author (id, name) FROM stdin;
    public          postgres    false    215   ?                 0    25101    books 
   TABLE DATA           E   COPY public.books (id, name, active, author, created_at) FROM stdin;
    public          postgres    false    217                     0    0    author_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.author_id_seq', 2, true);
          public          postgres    false    214                       0    0    books_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.books_id_seq', 8, true);
          public          postgres    false    216            o           2606    25099    author author_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.author DROP CONSTRAINT author_pkey;
       public            postgres    false    215            q           2606    25110    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public            postgres    false    217            r           2606    25111    books books_author_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_author_fkey FOREIGN KEY (author) REFERENCES public.author(id);
 A   ALTER TABLE ONLY public.books DROP CONSTRAINT books_author_fkey;
       public          postgres    false    3183    217    215                  x?3?N,J?2S
?\1z\\\ 8q?         t   x?u?;?  ?????l?{?.Q?JL???_?+??W?c??x??ȟslǵ^Y?7q]?nY?s뤨&?
????bBjf??e7?0??b???
dq
?yz%?Oы?T?Z?? ??jBm     