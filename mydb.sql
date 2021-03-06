PGDMP     7    (                x           waterboi    12.2    12.2 .    A           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            B           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            C           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            D           1262    74196    waterboi    DATABASE     �   CREATE DATABASE waterboi WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE waterboi;
                postgres    false            �            1259    106975    knex_migrations    TABLE     �   CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
 #   DROP TABLE public.knex_migrations;
       public         heap    postgres    false            �            1259    106973    knex_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.knex_migrations_id_seq;
       public          postgres    false    204            E           0    0    knex_migrations_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;
          public          postgres    false    203            �            1259    106983    knex_migrations_lock    TABLE     `   CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);
 (   DROP TABLE public.knex_migrations_lock;
       public         heap    postgres    false            �            1259    106981    knex_migrations_lock_index_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.knex_migrations_lock_index_seq;
       public          postgres    false    206            F           0    0    knex_migrations_lock_index_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;
          public          postgres    false    205            �            1259    107890    restaurants    TABLE     �   CREATE TABLE public.restaurants (
    id integer NOT NULL,
    restaurant_name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    price_range integer NOT NULL
);
    DROP TABLE public.restaurants;
       public         heap    postgres    false            �            1259    107888    restaurants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.restaurants_id_seq;
       public          postgres    false    210            G           0    0    restaurants_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;
          public          postgres    false    209            �            1259    107901    reviews    TABLE     �   CREATE TABLE public.reviews (
    id integer NOT NULL,
    users_id integer,
    restaurant_id integer,
    content text NOT NULL,
    rating integer NOT NULL
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    107899    reviews_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.reviews_id_seq;
       public          postgres    false    212            H           0    0    reviews_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;
          public          postgres    false    211            �            1259    106964    sessions    TABLE     �   CREATE TABLE public.sessions (
    sid character varying(255) NOT NULL,
    sess json NOT NULL,
    expired timestamp with time zone NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            �            1259    107876    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    display_name character varying(20) NOT NULL,
    first_name character varying(20) NOT NULL,
    last_name character varying(20) NOT NULL,
    location character varying(30) NOT NULL,
    email character varying(255),
    password character varying(255),
    user_type character varying(255) DEFAULT 'user'::character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    107874    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    208            I           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    207            �
           2604    106978    knex_migrations id    DEFAULT     x   ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);
 A   ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �
           2604    106986    knex_migrations_lock index    DEFAULT     �   ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);
 I   ALTER TABLE public.knex_migrations_lock ALTER COLUMN index DROP DEFAULT;
       public          postgres    false    206    205    206            �
           2604    107893    restaurants id    DEFAULT     p   ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);
 =   ALTER TABLE public.restaurants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �
           2604    107904 
   reviews id    DEFAULT     h   ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);
 9   ALTER TABLE public.reviews ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �
           2604    107879    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            6          0    106975    knex_migrations 
   TABLE DATA           J   COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
    public          postgres    false    204   4       8          0    106983    knex_migrations_lock 
   TABLE DATA           @   COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
    public          postgres    false    206   �4       <          0    107890    restaurants 
   TABLE DATA           P   COPY public.restaurants (id, restaurant_name, address, price_range) FROM stdin;
    public          postgres    false    210   �4       >          0    107901    reviews 
   TABLE DATA           O   COPY public.reviews (id, users_id, restaurant_id, content, rating) FROM stdin;
    public          postgres    false    212   ,5       4          0    106964    sessions 
   TABLE DATA           6   COPY public.sessions (sid, sess, expired) FROM stdin;
    public          postgres    false    202   �5       :          0    107876    users 
   TABLE DATA           n   COPY public.users (id, display_name, first_name, last_name, location, email, password, user_type) FROM stdin;
    public          postgres    false    208   �6       J           0    0    knex_migrations_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.knex_migrations_id_seq', 60, true);
          public          postgres    false    203            K           0    0    knex_migrations_lock_index_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);
          public          postgres    false    205            L           0    0    restaurants_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.restaurants_id_seq', 1, false);
          public          postgres    false    209            M           0    0    reviews_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.reviews_id_seq', 6, true);
          public          postgres    false    211            N           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    207            �
           2606    106988 .   knex_migrations_lock knex_migrations_lock_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);
 X   ALTER TABLE ONLY public.knex_migrations_lock DROP CONSTRAINT knex_migrations_lock_pkey;
       public            postgres    false    206            �
           2606    106980 $   knex_migrations knex_migrations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
       public            postgres    false    204            �
           2606    107898    restaurants restaurants_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.restaurants DROP CONSTRAINT restaurants_pkey;
       public            postgres    false    210            �
           2606    107909    reviews reviews_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    212            �
           2606    106971    sessions sessions_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (sid);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    202            �
           2606    107887    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public            postgres    false    208            �
           2606    107885    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    208            �
           1259    106972    sessions_expired_index    INDEX     N   CREATE INDEX sessions_expired_index ON public.sessions USING btree (expired);
 *   DROP INDEX public.sessions_expired_index;
       public            postgres    false    202            �
           2606    107915 %   reviews reviews_restaurant_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_restaurant_id_foreign FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_restaurant_id_foreign;
       public          postgres    false    2737    210    212            �
           2606    107910     reviews reviews_users_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_users_id_foreign FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_users_id_foreign;
       public          postgres    false    2735    212    208            6   g   x�}�;� �ZN� owY�bb,(�� ?��SYYOFC�` ��{��KuKm��hѷ�I|���B���S�0�\�i/Ӻ�m�gw�� t�c���d}���1��(�      8      x�3�4������ V      <   y   x����
�0@绯��E$^���7]����A2��������[��9�lK�T`��M�rmE�{�z������| �#DY)�|rg���JK�u��#�,նl�k��fҫ�}�����뀈o�I-A      >   �   x�E�K�0��)| T5-� �� ݸ�I*A����q"$v��ͳ�z�1�CB����J�t�	g����Ԡ�GSr(�]�hFE̢Fi��.(����ǲ=�qԼ�Kf��%���[�=��bY���{:.�1���2=      4   �   x�E��N�@���)�9nP�dk���xizhL��vⲻa�4���u����f�����[&s}�w�h����/Zb��?�?��J}!z��	%9��'GV���kl�
�H@�`��HLIBI��� >^v�K�L���Z�!�p�ٳ3���Cgx;]�
��Wh�`C!Y��(޻����5v��P���L�1U2�J:��E.w��a(��k+�R5p}����$�jP�8.n�etOIF��0NӀ$�g�y�/�Tg�      :   �   x�e�M�0 ��ۯ��yT4�[VF�:!5� ��8��ZR��<t��~��3+����f��.y*5�Z}�g?/��e�Ƙ�����g�ʽ��[lو�@�3W("��aR�%�F���4I]�XRV	�`ͥ�g^z*`�����ˎ�\��B���Dv�uޮJ
oC����<-}�a~O8h5�����L�     