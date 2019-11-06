import { TestBed } from '@angular/core/testing';
import { GoToasterService } from './go-toaster.service';


describe('GoToasterService', () => {
  let service: GoToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [GoToasterService]
    });

    service = TestBed.get(GoToasterService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('toastSuccess', () => {
    it('should add a toast with type positive', () => {
      service.toastSuccess();
      expect(service.toasts[0].type).toBe('positive');
      expect(service.toasts.length).toBe(1);
      expect(service.timers.length).toBe(1);
    });
  });

  describe('toastInfo', () => {
    it('should add a toast with type neutral', () => {
      service.toastInfo();
      expect(service.toasts[0].type).toBe('neutral');
      expect(service.toasts.length).toBe(1);
      expect(service.timers.length).toBe(1);
    });
  });

  describe('toastError', () => {
    it('should add a toast with type negative', () => {
      service.toastError();
      expect(service.toasts[0].type).toBe('negative');
      expect(service.toasts.length).toBe(1);
      expect(service.timers.length).toBe(1);
    });
  });

  describe('pauseTimers', () => {
    it('should stop all timers', () => {
      service.toastSuccess({}, 1000);
      service.pauseTimers();
      expect(service.timers.length).toBe(0);
    });
  });

  describe('startTimers', () => {
    it('should stop all timers', () => {
      service.toastSuccess({}, 1000);
      service.pauseTimers();
      service.startTimers();
      expect(service.timers.length).toBe(1);
    });
  });
});
