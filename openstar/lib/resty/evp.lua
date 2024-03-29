LJ� -  9 B	  X�  ' J   - 9-  9 B A  I � �ERR_reason_error_stringstring&Zero error code (null arguments?)ERR_get_error � ;-  9 -  9B A - 9 -  9B-  9  B)   X�- D -  9 , B- 9 -  9B-  9B  X�- D - 9 -  9B-  9	  B  X�- D =
   +  J � ��evp_pkeyEVP_PKEY_set1_RSAEVP_PKEY_freeEVP_PKEY_newRSA_freePEM_read_bio_RSAPrivateKeyBIO_putsBIO_vfreegcBIO_s_memBIO_new� P-  9 ' ) B-  9 ' ) B- 9B  X�- D -  9 - 9B- 9 B  X�- D - 9 	 +
  B  X�- D - 9 +	  
 +  9	 B  X�- D - 9
	 
  B  X�- D - 9	 
  B  X�- D -  9	 :
 B+	  J  ���stringEVP_DigestSignFinalEVP_DigestUpdateevp_pkeyEVP_DigestSignInitEVP_DigestInit_exEVP_get_digestbynameEVP_MD_CTX_destroygcEVP_MD_CTX_createsize_t[1]unsigned char[?]news   
  X�+  '  J 9=   +  J evp_pkeypublic_key4You must pass in an key_source for a public key� U-  9  B  X�- + D -  9B  X�- + D - 9 -  9B-  9  +	  B  X�- + D -  9 +  	 +
  9 B  X�- + D -  9 	 
 B  X�- + D - 9'	 	 B- 9
	 
  B-  9	 
  B	  X�+ +	  J X�+ '	 J K  �� �Verification failedEVP_DigestVerifyFinal	copyunsigned char[?]newEVP_DigestUpdateevp_pkeyEVP_DigestVerifyInitEVP_DigestInit_exEVP_MD_CTX_destroygcEVP_MD_CTX_createEVP_get_digestbyname� 	 W  X�+  '  J -  9-  9B A - 9 -  9B+   9' B  X�-  9  B)   X�- D -  9 , B X�-  9	   B)   X�- D -  9
 +  B   X�- D - 9 -  9B=   9 B  X�+   J - 9 -  9B=   +  J � ��public_keyEVP_PKEY_freeget_public_key	x509X509_freed2i_X509_bioBIO_writePEM_read_bio_X509BIO_puts-----BEGIN	findBIO_vfreegcBIO_s_memBIO_new'Must pass a PEM or binary DER cert�  -  9 ' B- 99  B)   X�- D -  9:  B +  J  ���string	x509i2d_X509unsigned char *[1]newb  6  9-  6 9' 6 9  B A AK  �	byte	%02Xformatstringinsert
table�2-  9  B  X�- 2 (�- 9' )  B- 9' )  B-  99   	 B  X�- 2 �- 9 : B4   9'	 3
	 B6
 9 '	 B+  2  �J D D �� �:concat
table .	gsubstring	x509X509_digestunsigned int[1]unsigned char[?]newEVP_get_digestbynameL  -  9 9 B  X�- D  +  J ��	x509X509_get_pubkey� 	R-  9 B  X�- + D - 9 -  9B-  9  +  B  X�- + D -  9B  X�- + D - 9 -  9B-  9  9 +  B  X�- + D -  9 B  X�-  9	 B- 9
-  9 B A -  9 B+  J -  9 B+ +  J �� �X509_STORE_CTX_cleanup"X509_verify_cert_error_stringstringX509_STORE_CTX_get_errorX509_verify_cert	x509X509_STORE_CTX_initX509_STORE_CTX_freeX509_STORE_CTX_newX509_STORE_load_locationsX509_STORE_freegcX509_STORE_new� 	 H  X�+  '  J -  9-  9B A - 9 -  9B+   9' B  X�-  9  B)   X�- D -  9 , B X�-  9	   B)   X�- D -  9
 +  B   X�- D - 9 -  9B=   +  J � ��public_keyEVP_PKEY_freed2i_PUBKEY_bioBIO_writePEM_read_bio_PUBKEYBIO_puts-----BEGIN	findBIO_vfreegcBIO_s_memBIO_new-Must pass a PEM or binary DER public key� 
  )6   ' B 9 5 5 =9 ' B3 4  =	3 =
3 =4  =3 =
3 =4  =3 =
3 =3 =3 =3 =4  =3	 =	
2  �L  PublicKey verify_trust get_public_key get_fingerprint get_der 	Cert verify RSAVerifier 	sign newRSASigner �// Error handling
unsigned long ERR_get_error(void);
const char * ERR_reason_error_string(unsigned long e);

// Basic IO
typedef struct bio_st BIO;
typedef struct bio_method_st BIO_METHOD;
BIO_METHOD *BIO_s_mem(void);
BIO * BIO_new(BIO_METHOD *type);
int	BIO_puts(BIO *bp,const char *buf);
void BIO_vfree(BIO *a);
int    BIO_write(BIO *b, const void *buf, int len);

// RSA
typedef struct rsa_st RSA;
int RSA_size(const RSA *rsa);
void RSA_free(RSA *rsa);
typedef int pem_password_cb(char *buf, int size, int rwflag, void *userdata);
RSA * PEM_read_bio_RSAPrivateKey(BIO *bp, RSA **rsa, pem_password_cb *cb,
								void *u);
RSA * PEM_read_bio_RSAPublicKey(BIO *bp, RSA **rsa, pem_password_cb *cb,
                                void *u);

// EVP PKEY
typedef struct evp_pkey_st EVP_PKEY;
typedef struct engine_st ENGINE;
EVP_PKEY *EVP_PKEY_new(void);
int EVP_PKEY_set1_RSA(EVP_PKEY *pkey,RSA *key);
EVP_PKEY *EVP_PKEY_new_mac_key(int type, ENGINE *e,
                               const unsigned char *key, int keylen);
void EVP_PKEY_free(EVP_PKEY *key);
int i2d_RSA(RSA *a, unsigned char **out);

// PUBKEY
EVP_PKEY *PEM_read_bio_PUBKEY(BIO *bp, EVP_PKEY **x,
                              pem_password_cb *cb, void *u);

// X509
typedef struct x509_st X509;
X509 *PEM_read_bio_X509(BIO *bp, X509 **x, pem_password_cb *cb, void *u);
EVP_PKEY *      X509_get_pubkey(X509 *x);
void X509_free(X509 *a);
void EVP_PKEY_free(EVP_PKEY *key);
int i2d_X509(X509 *a, unsigned char **out);
X509 *d2i_X509_bio(BIO *bp, X509 **x);

// X509 store
typedef struct x509_store_st X509_STORE;
typedef struct X509_crl_st X509_CRL;
X509_STORE *X509_STORE_new(void );
int X509_STORE_add_cert(X509_STORE *ctx, X509 *x);
    // Use this if we want to load the certs directly from a variables
int X509_STORE_add_crl(X509_STORE *ctx, X509_CRL *x);
int     X509_STORE_load_locations (X509_STORE *ctx,
                const char *file, const char *dir);
void X509_STORE_free(X509_STORE *v);

// X509 store context
typedef struct x509_store_ctx_st X509_STORE_CTX;
X509_STORE_CTX *X509_STORE_CTX_new(void);
int X509_STORE_CTX_init(X509_STORE_CTX *ctx, X509_STORE *store,
                         X509 *x509, void *chain);
int             X509_verify_cert(X509_STORE_CTX *ctx);
void X509_STORE_CTX_cleanup(X509_STORE_CTX *ctx);
int    X509_STORE_CTX_get_error(X509_STORE_CTX *ctx);
const char *X509_verify_cert_error_string(long n);
void X509_STORE_CTX_free(X509_STORE_CTX *ctx);

// EVP Sign/Verify
typedef struct env_md_ctx_st EVP_MD_CTX;
typedef struct env_md_st EVP_MD;
typedef struct evp_pkey_ctx_st EVP_PKEY_CTX;
const EVP_MD *EVP_get_digestbyname(const char *name);
EVP_MD_CTX *EVP_MD_CTX_create(void);
void    EVP_MD_CTX_destroy(EVP_MD_CTX *ctx);
int     EVP_DigestInit_ex(EVP_MD_CTX *ctx, const EVP_MD *type, ENGINE *impl);
int     EVP_DigestSignInit(EVP_MD_CTX *ctx, EVP_PKEY_CTX **pctx,
                        const EVP_MD *type, ENGINE *e, EVP_PKEY *pkey);
int     EVP_DigestUpdate(EVP_MD_CTX *ctx,const void *d,
                         size_t cnt);
int     EVP_DigestSignFinal(EVP_MD_CTX *ctx,
                        unsigned char *sigret, size_t *siglen);

int     EVP_DigestVerifyInit(EVP_MD_CTX *ctx, EVP_PKEY_CTX **pctx,
                        const EVP_MD *type, ENGINE *e, EVP_PKEY *pkey);
int     EVP_DigestVerifyFinal(EVP_MD_CTX *ctx,
                        unsigned char *sig, size_t siglen);

// Fingerprints
int X509_digest(const X509 *data,const EVP_MD *type,
                unsigned char *md, unsigned int *len);

	cdef
CONST SHA512_DIGESTSHA512SHA256_DIGESTSHA256 _VERSION
0.0.2Cffirequire 