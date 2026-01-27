// Main JavaScript functionality for Xponentia website

(function() {
  'use strict';

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    try {
      initMobileMenu();
      initLazyLoading();
      initSkipLink();
      initSmoothScroll();
      initScamAlertModal();
    } catch (error) {
      console.error('Error initializing website functionality:', error);
    }
  });

  /**
   * Mobile menu toggle functionality
   * Handles opening/closing mobile navigation menu with keyboard support
   */
  function initMobileMenu() {
    try {
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      
      if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
          try {
            const isOpen = nav.classList.contains('open');
            nav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', !isOpen);
            menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
          } catch (error) {
            console.error('Error toggling mobile menu:', error);
          }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          try {
            if (nav.classList.contains('open') && 
                !nav.contains(event.target) && 
                !menuToggle.contains(event.target)) {
              nav.classList.remove('open');
              menuToggle.setAttribute('aria-expanded', 'false');
              menuToggle.setAttribute('aria-label', 'Open menu');
            }
          } catch (error) {
            console.error('Error closing mobile menu:', error);
          }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
          try {
            if (event.key === 'Escape' && nav.classList.contains('open')) {
              nav.classList.remove('open');
              menuToggle.setAttribute('aria-expanded', 'false');
              menuToggle.setAttribute('aria-label', 'Open menu');
              menuToggle.focus();
            }
          } catch (error) {
            console.error('Error handling escape key for mobile menu:', error);
          }
        });
      }
    } catch (error) {
      console.error('Error initializing mobile menu:', error);
    }
  }

  /**
   * Lazy loading for images
   * Uses native lazy loading with IntersectionObserver fallback
   */
  function initLazyLoading() {
    try {
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(function(img) {
          try {
            img.addEventListener('load', function() {
              this.classList.add('loaded');
            });
            // If image is already loaded (cached)
            if (img.complete) {
              img.classList.add('loaded');
            }
          } catch (error) {
            console.error('Error handling image load:', error);
          }
        });
      } else {
        // Fallback for browsers without native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              try {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src || img.src;
                  img.classList.add('loaded');
                  observer.unobserve(img);
                }
              } catch (error) {
                console.error('Error in IntersectionObserver callback:', error);
              }
            });
          });

          images.forEach(function(img) {
            try {
              imageObserver.observe(img);
            } catch (error) {
              console.error('Error observing image:', error);
            }
          });
        } else {
          // Fallback: load all images immediately
          images.forEach(function(img) {
            try {
              img.src = img.dataset.src || img.src;
              img.classList.add('loaded');
            } catch (error) {
              console.error('Error loading fallback image:', error);
            }
          });
        }
      }
    } catch (error) {
      console.error('Error initializing lazy loading:', error);
    }
  }

  /**
   * Skip to main content link functionality
   * Provides keyboard navigation shortcut to main content
   */
  function initSkipLink() {
    try {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.addEventListener('click', function(event) {
          try {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.setAttribute('tabindex', '-1');
              target.focus();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } catch (error) {
            console.error('Error handling skip link:', error);
          }
        });
      }
    } catch (error) {
      console.error('Error initializing skip link:', error);
    }
  }

  /**
   * Smooth scroll for anchor links
   * Provides smooth scrolling behavior for in-page navigation
   */
  function initSmoothScroll() {
    try {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(function(link) {
        link.addEventListener('click', function(event) {
          try {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
              const target = document.querySelector(href);
              if (target) {
                event.preventDefault();
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Remove tabindex after focus for accessibility
                setTimeout(function() {
                  try {
                    target.removeAttribute('tabindex');
                  } catch (error) {
                    console.error('Error removing tabindex:', error);
                  }
                }, 1000);
              }
            }
          } catch (error) {
            console.error('Error handling smooth scroll:', error);
          }
        });
      });
    } catch (error) {
      console.error('Error initializing smooth scroll:', error);
    }
  }

  /**
   * Set current page in navigation
   * Highlights the current page link in navigation
   */
  function setCurrentPage() {
    try {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(function(link) {
        try {
          const linkPath = new URL(link.href).pathname;
          if (linkPath === currentPath || (currentPath === '/' && linkPath.endsWith('index.html'))) {
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        } catch (error) {
          // Silently fail for invalid URLs
          console.warn('Error processing navigation link:', error);
        }
      });
    } catch (error) {
      console.error('Error setting current page:', error);
    }
  }

  // Initialize current page highlighting
  setCurrentPage();

  /**
   * Focus trap for modals
   * Traps keyboard focus within modal when open
   */
  function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    return function(event) {
      if (event.key !== 'Tab') {
        return;
      }

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };
  }

  /**
   * Scam Alert Modal
   * Displays scam alert modal on home page with focus trap
   */
  function initScamAlertModal() {
    try {
      // Only show modal on home page (index.html)
      const isHomePage = window.location.pathname === '/' || 
                         window.location.pathname.endsWith('index.html') ||
                         window.location.pathname.endsWith('/');
      
      if (!isHomePage) {
        return;
      }

      const modal = document.getElementById('scam-alert-modal');
      const closeButton = modal?.querySelector('.modal-close');
      const overlay = modal?.querySelector('.modal-overlay');
      
      if (!modal) {
        return;
      }

      let focusTrapHandler = null;

      // Show modal on page load
      function showModal() {
        try {
          modal.setAttribute('aria-hidden', 'false');
          document.body.classList.add('modal-open');
          
          // Focus the close button for accessibility
          if (closeButton) {
            closeButton.focus();
          }
          
          // Set up focus trap
          focusTrapHandler = trapFocus(modal);
          modal.addEventListener('keydown', focusTrapHandler);
        } catch (error) {
          console.error('Error showing modal:', error);
        }
      }

      // Hide modal
      function hideModal() {
        try {
          modal.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('modal-open');
          
          // Remove focus trap
          if (focusTrapHandler) {
            modal.removeEventListener('keydown', focusTrapHandler);
            focusTrapHandler = null;
          }
        } catch (error) {
          console.error('Error hiding modal:', error);
        }
      }

      // Close button click
      if (closeButton) {
        closeButton.addEventListener('click', hideModal);
      }

      // Overlay click
      if (overlay) {
        overlay.addEventListener('click', hideModal);
      }

      // Escape key to close
      document.addEventListener('keydown', function(event) {
        try {
          if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            hideModal();
          }
        } catch (error) {
          console.error('Error handling escape key for modal:', error);
        }
      });

      // Prevent modal content clicks from closing modal
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.addEventListener('click', function(event) {
          event.stopPropagation();
        });
      }

      // Show modal after a short delay to ensure page is loaded
      setTimeout(showModal, 300);
    } catch (error) {
      console.error('Error initializing scam alert modal:', error);
    }
  }
})();
