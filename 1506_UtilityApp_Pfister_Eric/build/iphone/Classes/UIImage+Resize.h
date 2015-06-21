// UIImage+Resize.h
// Created by Trevor Harmon on 8/5/09.
// Free for personal or commercial use, with or without modification.
// No warranty is expressed or implied.

// NOTE: k1506_UtilityApp_Pfister_Eric modified to convert from Category to 
// new Class name since iPhone seems to have some issues with Categories
// of built in Classes

@interface UIImageResize : NSObject
{
}
+ (UIImage *)croppedImage:(CGRect)bounds image:(UIImage*)image;

+ (UIImage *)thumbnailImage:(NSInteger)thumbnailSize
          transparentBorder:(NSUInteger)borderSize
               cornerRadius:(NSUInteger)cornerRadius
       interpolationQuality:(CGInterpolationQuality)quality
					  image:(UIImage*)image;

+ (UIImage *)resizedImage:(CGSize)newSize
     interpolationQuality:(CGInterpolationQuality)quality
					image:(UIImage*)image
					hires:(BOOL)hires;

+ (UIImage *)resizedImageWithContentMode:(UIViewContentMode)contentMode
                                  bounds:(CGSize)bounds
                    interpolationQuality:(CGInterpolationQuality)quality
								   image:(UIImage*)image;
@end
