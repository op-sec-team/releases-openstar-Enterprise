LJ    L  /  -  9   -  99D �	freeCgc� +6  96  96 96 96 94  )  	 '
 BX�  '	 B   &  B
  X�  B-  9
 D < ER�+  	 J �	load
(.*/)
[^;]+
cpathpackage
close	openio
matchgmatchstring_  -  9   B-  X�-  99 D X�-  9  D K  ��pstringtypeof2  
   X�'  L -  4 >   >D �&  6    B-  8L �	type.  -  9 : B' &L  �[?]	Typen 6  : B-  8   B- 86   +  H�
  	 B<
FR�L �	�	next	typeM  -  9   B- 4 >  >  >B J  ��ToGoArray&  -  6    B8L 	�	type�  '   X�+  L -  9 '   B  X�-  9 '   B  X�- 9  D X�-  9 '   B  X�- 9  D X�6 ' BK  � �unknown type
errorToLuaNumber
GoIntToLuaStringchar *GoStringistype/  -  9   B   D  �Converter>  6    B-  8 )   B : J �	typeU   6  '  ' &BK  ".Attempt to write to undeclared variable "
error�  3 H4   6  ' B9' B9' B9' B9' B9' B3	 5
 5 ==5	 =	=	9
=
 3
 =
 9
=
 3
 =
 9
=
 3
 =
 6
 =
 3
 =
 9
 =
	3
 =
 3
! =
  3
# =
" 9
" =
$	3
& =
% 3
( =
' 3
* =
) 3
, =
+ 3
. =
- 5
0 3/ =1
62   
 B2  �L  setmetatable__newindex    ToGoPointer 	ToGo 
ToLua Converter ToGoSlice
table ToGoArray SliceType 	Type ToGoStringtonumberToLuaNumber ToLuaStringExterns 	LoadGoType AddToGCnewNewnil  stringnumber   number
GoIntstringGoString GoInt[?]GoString[?]GoSliceGoStringtypeof�  // standard Go definitions //

  typedef signed char GoInt8;
  typedef unsigned char GoUint8;
  typedef short GoInt16;
  typedef unsigned short GoUint16;
  typedef int GoInt32;
  typedef unsigned int GoUint32;
  typedef long long GoInt64;
  typedef unsigned long long GoUint64;
  typedef GoInt64 GoInt;
  typedef GoUint64 GoUint;
  typedef float GoFloat32;
  typedef double GoFloat64;
  typedef __complex float GoComplex64;
  typedef __complex double GoComplex128;

  // static assertion to make sure the file is being used on architecture
  // at least with matching size of GoInt.
  typedef char _check_for_64_bit_pointer_matching_GoInt[sizeof(void*)==64/8 ? 1:-1];

  // change to Go struct: add 'const' declaration to char * (required by Lua FFI)
  // typedef struct { char *p; GoInt n; } GoString;
  typedef struct { const char *p; GoInt n; } GoString;

  typedef void *GoMap;
  typedef void *GoChan;
  typedef struct { void *t; void *v; } GoInterface;
  typedef struct { void *data; GoInt len; GoInt cap; } GoSlice;

  // C stdlib definitions //

  void free(void *ptr);
	cdefffirequire 